import { createClient, Session, AuthChangeEvent } from '@supabase/supabase-js';

// Load environment variables for the client
// These variables must be prefixed with NEXT_PUBLIC_ for the client side
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase environment variables are missing. Check your .env.local file.");
}

// Create the Supabase client instance
export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);

// FIX: Exporting types for use in other components
export type { Session, AuthChangeEvent };