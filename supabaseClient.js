import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://cciwvebowxncmstxryvk.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjaXd2ZWJvd3huY21zdHhyeXZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2OTQ3OTMsImV4cCI6MjA2OTI3MDc5M30.BNQCHCy214Rc90r_2qlDxENHei9lI_B892rHc0irrzs';

export const supabase = createClient(supabaseUrl, supabaseKey);
