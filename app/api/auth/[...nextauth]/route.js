

import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

import bcrypt from "bcrypt";
import Database from "@/backend/libs/db/prisma";


export const authOptions = {
    providers:[
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { label: "email", type: "text" },
                password: { label:"password", type:"password"}
            },

            async authorize(credentials){
                const { email, password} = credentials;

                const user = await Database.FindUserByEmail(email);
                if (!user){
                    return null;
                }

                const IsPasswordCorrect = await bcrypt.compare(password, user.password);
                if (!IsPasswordCorrect){
                  return null;
                }

                return user;
             },
        })
    ],
    callbacks:{
        async jwt({ token, user}){
            if (user){
                token.id = user.id;
                token.name = user.name;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token}){
            if (token && session.user){
                session.user.role = token.role;
            }
            return session;
        }
    },
    pages:{
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };