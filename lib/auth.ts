import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { signIn, handlers, signOut, auth } = NextAuth({providers: [Google],});
