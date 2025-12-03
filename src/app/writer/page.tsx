'use client';

import React, { useState, useCallback } from 'react';

// Define the API model and endpoint
const MODEL_NAME = 'gemini-2.5-flash-preview-09-2025';
// NOTE: apiKey is left blank. The runtime environment provides it automatically.
const API_KEY = ""; 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;


// --- Utility Functions for API Communication and Backoff ---

/**
 * Implements exponential backoff for fetching the Gemini API.
 * This is crucial for handling transient network or server errors.
 */
async function fetchWithBackoff(url: string, options: RequestInit, maxRetries = 5): Promise<Response> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);

      // Success or non-retriable error (e.g., 4xx)
      if (response.status < 500 || response.status === 501) {
        return response;
      }
      
      // Retriable error (5xx server error, or rate limiting)
      console.warn(`Attempt ${attempt + 1} failed with status ${response.status}. Retrying...`);
    } catch (error) {
      // Network error
      console.error(`Attempt ${attempt + 1} failed due to network error:`, error);
    }