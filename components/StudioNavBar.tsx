import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { GitHub } from "react-feather";
import Link from "next/link";
function StudioNavBar(props: any) {
  return (
    <div>
      <div className="flex justify-between p-3 bg-[#101112]">
        <Link
          href="/"
          className="flex items-center text-white hover:text-yellow-400">
          <ArrowUturnLeftIcon className="w-5 h-5 mx-2"></ArrowUturnLeftIcon>
          Go to website
        </Link>
        <Link
          href="https://github.com/kckartik17"
          target="_blank"
          className="text-white hover:text-yellow-400">
          <GitHub></GitHub>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavBar;
