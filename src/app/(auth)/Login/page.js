import Login from "@/components/Form/form";
import { signIn, auth } from "../../../../auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();
  if (session) return redirect("/");
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Login />
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          type="submit"
          className=" border p-3 px-5 mt-6 border-slate-300"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
}
