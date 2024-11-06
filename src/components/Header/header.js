import Link from "next/link";
import { auth, signOut } from "../../../auth";
import { Avatar, AvatarImage } from "../ui/avatar";

export default async function Header() {
  const session = await auth();
  console.log("session in header=>", session);

  return (
    <div className="bg-slate-400">
      <div className="flex py-2 justify-between items-center container mx-auto">
        <h2 className="text-2xl">LMS</h2>

        {session ? (
          <div className="flex gap-3">
            <Avatar className="mt-2">
              <AvatarImage src={session?.user?.image} />
            </Avatar>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className=" border p-3 px-5 border-slate-300"
              >
                Logout
              </button>
            </form>
          </div>
        ) : (
          <Link href={"/login"}>
            <button type="submit" className=" border p-3 px-5 border-slate-300">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
