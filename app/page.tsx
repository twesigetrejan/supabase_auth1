
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Index() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <p className="text-4xl">welcome Home, great way to start</p>
      </main>
    </>
  );
}
