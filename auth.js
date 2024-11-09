import { ConnectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/userModal";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

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
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        console.log("credentials", credentials);

        let res = await fetch(`http://localhost:3000/api/users/login`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });
        res = await res.json();
        user = res.user;
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider == "google") {
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
      // console.log("user in jwt", user);
      token._id = user._id;
      token.role = user.role;
      token.fullName = user.fullName;
      token.profileImg = user.picture;

      return token;
    },
    session({ session, token }) {
      session.user._id = token._id;
      session.user.role = token.role;
      session.user.fullName = token.fullName;
      session.user.profileImg = token.picture;
      return session;
    },
  },
});
