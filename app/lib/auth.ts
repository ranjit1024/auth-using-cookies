import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
      user: {
        id: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
      };
    }
  }

export const  authOption = {
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
     
     session:({session, token, user}: any) => {
      
          if(token?.sub && session?.user){
              session.user.id = token.sub;
          }
          return session
     }
      
  
   }
  }