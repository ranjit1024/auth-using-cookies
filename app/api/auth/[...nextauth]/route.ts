import { authOption } from "@/app/lib/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";



export const handler = NextAuth(authOption)

export const GET = handler;
export const POST = handler;
