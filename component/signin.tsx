"use client"
import {  signIn } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";


export const  Signup =   () => {
    const router = useRouter()
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Create an Account</h2>
                
                    
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input type="email" className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-200 text-black border-gray-200" placeholder="example@email.com"  />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input type="password" className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 text-black border-gray-200" placeholder="••••••••"  />
                    </div>

                   
                    <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                   >Sign Up</button>

                
                    <button onClick={async () =>{
                        router.push("/");
                        const response = await signIn('google');
                        if(response){

                        }
                    }} className="flex justify-center w-[100%] gap-6 hover:cursor-pointer">
                    <img loading="lazy" height="24" width="24" id="provider-logo" src="https://authjs.dev/img/providers/google.svg"/>
                    <p className="text-black">Login with google</p>
                        
                    </button>
                <p className="text-sm text-center text-gray-600">Already have an account? <a href="#" className="text-blue-600 hover:underline">Log in</a></p>
            </div>
        </div>
    );
};

export default Signup;
