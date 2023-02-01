import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import {loginAPI, registerAPI} from "../../../apis/authentication";
import {axios} from "../../../apis";

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {label: "Username", type: "text", placeholder: "jsmith"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials) {
        console.log(credentials);
        const res = await loginAPI({email: credentials.email, password: credentials.password});

        if (res) {
          console.log("User found", res);
          return res;
        }
        console.log("No user found");
        return null
      }
    })
  ],
  callbacks: {
    async signIn({user, account, profile}) {
      if(account.provider !== 'google')
        return true;

      console.log("Sign in", user);
      const names = user.name.split(' ');
      const firstName = names[0];
      const lastName = names[1];

      console.log("Creating user", user.email, firstName, lastName);
      await registerAPI({email: user.email, firstName, lastName});

      return true;
    }
  },
  pages: {
    signIn: '/login',
  }
}
export default NextAuth(authOptions)