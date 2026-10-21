import { createClient } from "@supabase/supabase-js"

console.log('URL:', import.meta.env.VITE_SUPABASE_URL)
console.log('KEY:', import.meta.env.VITE_SUPABASE_KEY)
const supaBaseUrl=import.meta.env.VITE_SUPABASE_URL
const supaBaseKey=import.meta.env.VITE_SUPABASE_KEY
const supabasecl=createClient(supaBaseUrl,supaBaseKey)

export default supabasecl;