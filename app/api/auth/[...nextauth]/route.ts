import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name:'Email',
        credentials:{
            username: {label:'email', type:'text', placeholder:'email'},
            password: {label:'password', type:'password', placeholder:'password'}
        },

        async authorize(credentials:any){
            console.log(credentials)

            return {
                id:"user1",
                name:'ranjit das',
                email:'ranjitdas@gmail.com'
            }
        }
    })
   
]
});

export const GET = handler;
export const POST = handler;
