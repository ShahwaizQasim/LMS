import { ConnectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/userModal";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const handleLoginUser = async (profile) => {
  await ConnectDB();
  const user = await UserModal.findOne({ email: profile?.email });
  if (user) {
    return user;
  } else {
    const obj = {
      fullName: profile?.name,
      email: profile?.email,
      provider: "google",
      profileImg: profile?.picture,
    };
    let newUser = await new UserModal(obj);
    newUser = await newUser.save();

    return newUser;
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        console.log("account=>", account);
        console.log("profile=>", profile);
        const user = await handleLoginUser(profile);

        return { ...profile, role: user?.role };
      }
      return true;
    },
    async jwt({ token }) {
      console.log("token=> ", token);
      const user = await handleLoginUser(token);
      console.log("user in jwt", user);
      token._id = user._id;
      token.role = user.role;

      return token;
    },
    session({ session, token }) {
      session.user._id = token._id;
      session.user.role = token.role;
      return session;
    },
  },
});
