import Link from "next/link";
import DatastoryLogo from "../svgs/DatastoryLogo";

export default function NavBar() {
  return (
    <nav className="py-5 md:py-10 max-w-[1200px] px-6 md:px-24 mx-auto">
      <Link href={"/"} className="w-max block">
        <DatastoryLogo />
      </Link>
    </nav>
  )
}