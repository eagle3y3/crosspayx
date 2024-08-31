"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import useScroll from "../hooks/use-scroll";
import { useSelectedLayoutSegment } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const scrolled = useScroll(4);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full border-b text-red-800 border-gray-200 transition-all`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4 md:px-2">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row items-center justify-center space-x-3 md:hidden"
          >
            <Image
              src={"/logo.png"}
              height={30}
              width={30}
              alt="logo plane"
              className="w-auto h-auto max-h-[30px] max-w-[30px]"
            />

            <span className="flex text-xl font-bold ">Header</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
