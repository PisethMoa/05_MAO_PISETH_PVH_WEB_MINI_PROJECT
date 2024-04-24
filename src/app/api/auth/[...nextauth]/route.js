import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

export const authOption = {
  providers: [
    CredentialsProvider({
      async authorize(userInfo) {
        const newUserInfo = {
          email: userInfo.email,
          password: userInfo.password,
        };
        const login = await loginService(newUserInfo);
        console.log("Data login ", login);
        if (login.status == 400) {
          return;
        } else {
          return login;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  // pages: {
  //   signIn: "/login",
  // },
  pages: {
    signIn: "/login",
  },
};
const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
