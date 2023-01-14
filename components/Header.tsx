import Image from "next/image";
import Link from "next/link";
import { GitHub } from "react-feather";
import logo from "../public/logo.svg";
function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image src={logo} alt="logo" width={120} height={120}></Image>
        </Link>
      </div>
      <div>
        <Link
          href="https://github.com/kckartik17"
          target="_blank"
          className="flex items-center rounded-full text-center px-5 py-3 text-sm md:text-base bg-gray-900 text-white hover:text-yellow-400">
          <GitHub></GitHub>
          <span className="mx-2">Github</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
