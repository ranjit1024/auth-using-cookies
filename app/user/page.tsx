

import Navbar from "@/component/appbar";
import { getServerSession } from "next-auth"
import { authOption } from "../lib/auth";



export default async function (){
    const session = await getServerSession(authOption);
    return <div>
        <Navbar/>
        Server component <br />
        {JSON.stringify(session)}
    </div>


}