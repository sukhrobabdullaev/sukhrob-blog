import Link from "next/link";
import React from "react";

const DrawerLinks = () => {
  return (
    <>
      <Link href="/blog">Blog</Link>
      <Link href="https://youtube.com/@sukhrob-abdullaev" target="_blank">
        YouTube
      </Link>
    </>
  );
};

export default DrawerLinks;
