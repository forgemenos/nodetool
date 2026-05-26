import { createClient } from "@supabase/supabase-js";

/**
 * Create the Supabase client using credentials from environment variables.
 * The variables should be provided in a Vite-compatible `.env` file or
 * through the deployment environment. This keeps sensitive data out of
 * the repository and allows easy configuration for different deployments.
 *
 * ── ForgeOS deployment ──
 * This is the forked ForgeOS deployment of Nodetool. The official upstream
 * image is built without VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY, which
 * causes the frontend to fall back to "http://localhost" and break OAuth.
 * We hardcode our project values as the defaults below. Build-time env vars
 * (if set) still take precedence, so this remains environment-overridable.
 */

// Vite exposes environment variables via `import.meta.env`
const supabaseUrl: string | undefined =
  import.meta.env.VITE_SUPABASE_URL ?? "https://mzrgnskgykryyxswltsp.supabase.co";
const supabaseAnonKey: string | undefined =
  import.meta.env.VITE_SUPABASE_ANON_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16cmduc2tneWtyeXl4c3dsdHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3Mjc4NjIsImV4cCI6MjA5NTMwMzg2Mn0.BteqQ-ZyD-kP2eewP38P5NpW568mKpZyJ5-Mli8jnUE";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase credentials not found in environment. Using test placeholders for development."
  );
}

export const supabase = createClient(
  supabaseUrl ?? "http://localhost",
  supabaseAnonKey ?? "public-anon-key"
);

