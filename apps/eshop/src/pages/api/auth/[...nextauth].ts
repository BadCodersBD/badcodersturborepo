import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        const user = {
          ...credentials,
        };
        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({
      token,
      user,
      account,
    }: {
      token: any;
      user: any;
      account: any;
    }) => {
      return token;
    },
    session: ({ session, token }: { session: any; token: any; user: any }) => {
      return session;
    },
  },
};

export default NextAuth(authOptions);
