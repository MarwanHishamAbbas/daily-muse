"use client";

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { useUser } from "@clerk/nextjs";
import SignOutButton from "../SignOutButton";

const Navbar = () => {
  const { user } = useUser();

  return (
    <header className="fixed h-20 flex items-center max-w-7xl mx-auto px-5 backdrop-blur-sm top-0 left-0 right-0 w-full">
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
        <DropdownMenu />
        <div className="gap-5 hidden md:flex items-center">
          <Link target="_blank" href="https://marwanhisham.com">
            <Button variant="ghost">Developer</Button>
          </Link>
          <Link href="/create-post">
            <Button variant="ghost">Create Post</Button>
          </Link>
          <div className="flex items-center gap-2">
            <Image
              src={user?.profileImageUrl || ""}
              alt="Current User"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-gray-500">{user?.fullName}</p>
          </div>
          <SignOutButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
