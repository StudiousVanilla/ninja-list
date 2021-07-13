import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[]) 
    
    // useRouter

    return ( 
        <div className="flex flex-col items-start w-5/6">
            <h1 className="heading">Oops..</h1>
            <h2 className="heading">That page cannot be found</h2>
            <Link href="/">
                <p className=" w-52 btn text-center bg-gray-700 text-white">Go back to <a>Homepage</a></p>
            </Link> 
        </div>
     );
}
 
export default NotFound;