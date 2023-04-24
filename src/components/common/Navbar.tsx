"use client";

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { SignOutButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded || !isSignedIn) {
    router.push("/auth/sign-in");
  }

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
          <Link target="_blank" href="/create">
            <Button variant="ghost">Create Post</Button>
          </Link>
          <Button>
            <SignOutButton />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
