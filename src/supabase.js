import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_supabaseUrl;
const supabaseKey = import.meta.env.VITE_supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;