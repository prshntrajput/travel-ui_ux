import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const NavBar = () => {
  return (
    <nav className=" flexBetween max-container
     padding-container relative z-30 py-5">
    <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={72} height={28}/>
    </Link>
     <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link)=>(
                <Link className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" href={link.href} key={link.key}>{link.label}</Link>
            ))}
    </ul>

    <div className="hidden lg:flexCenter">
        <Button type="button" variant="btn_dark_green" title="Login" icon="/user.svg"/>
    </div>

    <Image src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  )
}

export default NavBar