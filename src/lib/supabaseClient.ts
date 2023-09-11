import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://oscmuwpgamjuxxivotqn.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zY211d3BnYW1qdXh4aXZvdHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0NDU4MTMsImV4cCI6MjAxMDAyMTgxM30.SAg4_r5jUA7pQtChbvhbGL32q5vle5v_64RMSzE8apI'
);
