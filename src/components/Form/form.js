import { auth, signIn } from "../../../auth";

export default async function Login() {
  return (
    <form
      className="flex flex-col gap-2"
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData, { redirect: false });
      }}
    > 
      <label>
        Email
        <br />
        <input
          name="email"
          className="border border-b-slate-400 p-2 mt-2"
          type="email"
          required
        />
      </label>
      <label>
        Password <br />
        <input
          name="password"
          className="border border-b-slate-400 p-2 mt-2"
          type="password"
          required
        />
      </label>
      <button className="mt-2 border py-2 rounded" type="submit">
        LogIn
      </button>
    </form>
  );
}
