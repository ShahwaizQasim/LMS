
import { signIn, auth } from "../../../../auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
    const session = await auth();
    if (session) return redirect('/')
  return (
    <div className="flex h-screen justify-center items-center">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit" className=" border p-3 px-5 border-slate-300">
          Signin with Google
        </button>
      </form>
    </div>
  );
}
