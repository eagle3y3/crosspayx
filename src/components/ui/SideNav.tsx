"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SIDENAV_ITEMS } from "@/constants";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

function SideNav() {
  const pathname = usePathname();

  return (
    <div className="fixed hidden h-screen border-l border-zinc-200 bg-white md:flex md:w-30 overflow-hidden">
      <div className="flex flex-col space-y-6">
        <Link
          href="/"
          className="flex h-12 w-full flex-row items-center justify-center  border-zinc-200 md:justify-start md:px-3"
        >
          <span className="hidden text-xl font-bold md:flex text-black">
            CrossPayX
          </span>
        </Link>
        {SIDENAV_ITEMS.map((item) => {
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                pathname === item.path
                  ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline",
                "justify-start",
                "text-slate-800"
              )}
            >
              <div className="pr-1">{item.icon}</div>
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
