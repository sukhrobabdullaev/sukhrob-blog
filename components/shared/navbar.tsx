import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Theme } from "../ui/theme";

const montserrat = Montserrat({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="p-4 drop-shadow-sm fixed z-50 top-0 right-0 left-0 w-full ">
      <div className="flex items-center justify-between md:max-w-[1336px] mx-auto ">
        <Link
          href="/"
          className={cn("font-semibold text-lg", montserrat.className)}
        >
          Sukhrob's blog
        </Link>
        <div className="links flex space-x-2 items-center">
          <Link href="/blog">Blog</Link>
          <Link href="https://youtube.com/@sukhrob-abdullaev" target="_blank">
            Youtube
          </Link>
          <Theme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
