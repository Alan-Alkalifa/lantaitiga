import { createClient } from '@supabase/supabase-js';

export type Database = {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string;
          name: string;
          email: string;
          company: string | null;
          phone: string | null;
          message: string;
          service: 'general' | 'web' | 'mobile' | 'design' | 'cloud' | 'consulting' | 'support';
          status: 'new' | 'in_progress' | 'completed' | 'archived';
          created_at: string;
          updated_at: string;
          assigned_to: string | null;
          last_contacted_at: string | null;
          is_priority: boolean;
          notes: string | null;
        };
        Insert: Omit<Database['public']['Tables']['contacts']['Row'], 
          'id' | 'created_at' | 'updated_at' | 'status' | 'assigned_to' | 'last_contacted_at' | 'is_priority' | 'notes'>;
        Update: Partial<Database['public']['Tables']['contacts']['Row']>;
      };
    };
    Views: {
      recent_contacts: {
        Row: {
          id: string;
          name: string;
          email: string;
          service: Database['public']['Tables']['contacts']['Row']['service'];
          status: Database['public']['Tables']['contacts']['Row']['status'];
          created_at: string;
          is_priority: boolean;
        };
      };
    };
  };
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
