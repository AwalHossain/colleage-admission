import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dhoavggqsixaukkicmss.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRob2F2Z2dxc2l4YXVra2ljbXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2ODE0NzIsImV4cCI6MjAzMzI1NzQ3Mn0.a8hcBtHBQjj9mj6yek71tf5Mn6RuRZfE5iuWlgGyZuQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
