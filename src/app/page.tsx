import { MeteoconsStarFill } from "@/assets/star";
import Image from "next/image";
import Link from "next/link";
import { CgArrowsExpandUpRight } from "react-icons/cg";

export default function Home() {
  return (
    <main className="container bg-gradient-to-br from-[#EDEEED] to-white">
      <div className="flex justify-start items-center min-h-[90vh] ">
        <div className="space-y-4 h-full">
          <h3 className="text-6xl font-bold text-slate-700">Hi! I Am <br /><span>Abbad Imad <MeteoconsStarFill className="relative bottom-2 right-2 inline"/></span></h3>
          <p className="text-lg font-semibold text-slate-800">Building websites and web apps for over 3 years</p>
          <div className="flex items-center gap-6">
            <button className="px-7 py-2.5 bg-[#FD481D] text-white font-bold">
              Hire me
            </button>

            <Link href="/" className="flex items-center gap-3 font-semibold">Projects <CgArrowsExpandUpRight /></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
