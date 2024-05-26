import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://khhftgtgtubhxxapfhfr.supabase.co'; // Replace with your Supabase URL
export const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoaGZ0Z3RndHViaHh4YXBmaGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1OTM5MDIsImV4cCI6MjAyOTE2OTkwMn0.nqz8yOnF4fvMd1A321jJaFSPV9rxfC7xG4fPUfzBWus'; // Replace with your Supabase Anon Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);