import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import axios from "axios";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: `${process.env.DISCORD_CLIENT_ID}`,
      clientSecret: `${process.env.DISCORD_CLIENT_SECRET}`,
    }),
    GithubProvider({
      clientId: `${process.env.GITHUB_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
    }),
    FacebookProvider({
      clientId: `${process.env.FACEBOOK_ID}`,
      clientSecret: `${process.env.FACEBOOK_SECRET}`,
    }),
    // AzureADProvider({
    //   clientId: `${process.env.AZURE_AD_CLIENT_ID}`,
    //   clientSecret: `${process.env.AZURE_AD_CLIENT_SECRET}`,
    //   tenantId: `${process.env.AZURE_AD_TENANT_ID}`,
    // }),
    GoogleProvider({
      clientId: `${process.env.GOOGLE_ID}`,
      clientSecret: `${process.env.GOOGLE_SECRET}`,
    }),

    CredentialsProvider({
      type: "credentials",
      credentials: {},
      // @ts-expect-error type error is not solved
      async authorize(credentials) {
        const user = {
          ...credentials,
        };
        if (user) {
          return user;
        } else {
          console.log("check your credentials");
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  callbacks: {
    async signIn(params) {
      const { user, account } = params;
      // console.log('signIn callback triggered:', user, account);
      if (
        (user && account && account.provider === "github") ||
        (account && account.provider === "google")
      ) {
        const { id, name, email, image } = user;
        // console.log(name, email, image, id);
        const postData = {
          name: name,
          email: email,
          avatar: image,
          password: id,
        };

        try {
          const response = await axios.post(
            "https://hoteldb-delta.vercel.app/api/register",
            postData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          );

          if (response?.data?.statusCode === 200) {
            console.log("Provider login response:", response?.data?.data);
          } else {
            console.error(
              "Error sending data to endpoint:",
              response.statusText,
            );
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }

      return true;
    },

    async jwt({ token, user }) {
      // console.log(account);
      if (user) {
        token.id = user.id;
        // @ts-expect-error type error is not solved
        token.picture = user.avatar;
        token.email = user.email;
        token.name = user.name;
        // @ts-expect-error type error is not solved
        token.isAdmin = user.isAdmin;
        // @ts-expect-error type error is not solved
        token.token = user.token;
      }
      return token;
    },
    
    async session({ session, token }) {
      if (token) {
        // @ts-expect-error type error is not solved
        session.user.avatar = token.picture;
        // @ts-expect-error type error is not solved
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        // @ts-expect-error type error is not solved
        session.user.isAdmin = token.isAdmin;
        // @ts-expect-error type error is not solved
        session.user.token = token.token;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// Export the default handler function
export default NextAuth(authOptions);
