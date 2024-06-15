import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tctewqfiriuszxtbabhi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdGV3cWZpcml1c3p4dGJhYmhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4NTM2NTIsImV4cCI6MjAzMzQyOTY1Mn0.yZ4i6S13fvP-6kPCOjtfK-PXKalRyOQIP5iqnrFc4o8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;