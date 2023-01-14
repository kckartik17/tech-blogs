import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
function StudioNavBar() {
  return (
    <div className="bg-[#101112]">
      <div className="flex items-center p-3">
        <Link href="/" className="flex items-center text-yellow-400">
          <ArrowUturnLeftIcon className="w-5 h-5 mx-2 text-yellow-400"></ArrowUturnLeftIcon>
          Go to website
        </Link>
      </div>
    </div>
  );
}

export default StudioNavBar;
