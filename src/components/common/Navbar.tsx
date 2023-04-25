"use client";

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="fixed h-20 flex items-center max-w-7xl mx-auto px-5 backdrop-blur-sm top-0 left-0 right-0 w-full z-50">
      <nav className="flex justify-between items-center w-full">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Daily Muse Logo"
            width={160}
            height={160}
            quality={100}
          />
        </Link>
        <div className="gap-5 flex items-center">
          <Link target="_blank" href="https://marwanhisham.com">
            <Button variant="ghost">Developer</Button>
          </Link>
          <Link href="/create-post">
            <Button variant="ghost">Create Post</Button>
          </Link>
          <UserButton
            afterSignOutUrl="/auth/sign-in"
            afterMultiSessionSingleSignOutUrl="/auth/sign-in"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
