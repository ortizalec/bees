import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_supabaseKey
const supabaseUrl = import.meta.env.VITE_supabaseUrl

export const supabase = createClient(supabaseUrl, supabaseKey)