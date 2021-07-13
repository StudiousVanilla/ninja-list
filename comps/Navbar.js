import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

const NavBar = () => {
    return ( 
        <nav className=" w-5/6 flex justify-between h-40 m-auto px-10 mb-10 border-b border-gray-0">
            <div className="logo flex items-center">
                <Image src="/logo.png" alt="Ninja List Logo" width={128} height={77} />
            </div>
            <div className="w-1/3 min-w-max flex items-end justify-evenly text-xl pb-2">
                <Link href="/">
                    <a className="mx-1">Home</a>
                </Link>
                <Link href="/about">
                    <a className="mx-1">About</a>
                </Link>
                <Link href="/ninjas">
                    <a className="mx-1">Ninja Listing</a>
                </Link>
            </div>
        </nav>
     );
}
 
export default NavBar;