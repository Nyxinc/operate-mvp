import { createClient } from "@supabase/supabase-js";

// Load environment variables. Vercel automatically exposes these.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables in Vercel/local .env.local file.");
}

// Initialize the Supabase Client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);