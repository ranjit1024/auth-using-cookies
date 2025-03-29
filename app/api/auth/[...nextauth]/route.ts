import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name:'Email',
        credentials:{
            username: {label:'email', type:'text', placeholder:'email'},
            password: {label:'password', type:'password', placeholder:'password'}
        },

        async authorize(credentials:any){
            console.log(credentials);
            

            return {
                id:"user1",
                name:'ranjit das',
                email:'ranjitdas@gmail.com'
            }
        }
    }),
    
   
],

secret:process.env.NEXTUTH_SECRET,

 callbacks:{
   jwt:async ({token,user}) => {
    console.log(token);
    return token;
   }
 }
})

export const GET = handler;
export const POST = handler;
