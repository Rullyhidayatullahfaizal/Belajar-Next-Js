"use client"

import Link from "next/link"
import  {usePathname,useRouter}  from "next/navigation"
const NavbarHome = () => {
    const pathName = usePathname()
    const router = useRouter()
    return (
        <>
            <nav className="flex  bg-slate-500 justify-between">
                <ul className="flex gap-4 p-4 cursor-pointer font-semibold">
                    <Link href="/" className="">
                    <li className={` hover:text-red-400 ${pathName === "/" ?  "text-red-500" : "text-blue-500"} `}>Home</li>
                    </Link>
                    <Link href="/about">
                    <li className={` hover:text-red-400 ${pathName === "/about" ?  "text-red-500" : "text-blue-500"} `}>about</li>
                    </Link>
                    <Link href="/contact">
                    <li className={` hover:text-red-400 ${pathName === "/contact" ?  "text-red-500" : "text-blue-500"} `}>Contact</li>
                    </Link>
                </ul>
                <div className="">
                    <button onClick={() => router.push('/register')} className="bg-blue-500 rounded-lg hover:bg-red-400 font-bold text-white py-2 px-4  mt-2 me-5">Register</button>
                    <button onClick={() => router.push('/login')} className="bg-blue-500 rounded-lg hover:bg-red-400 font-bold text-white py-2 px-4  mt-2 me-5">Login</button>
                </div>
            </nav>       
        </>
    )
}

export default NavbarHome