"use client";

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { signOut, userId, isLoaded, isSignedIn } = useAuth();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  const signUserOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
      router.push("/auth/sign-in");
    } catch (error) {
      throw new Error("Internal Server Error");
    } finally {
      setIsLoading(false);
    }
  };
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
            loading="lazy"
          />
        </Link>
        <div className="gap-2 hidden md:flex">
          <Link target="_blank" href="https://marwanhisham.com">
            <Button variant="ghost">Developer</Button>
          </Link>
          {userId ? (
            <div className="flex items-center gap-2">
              <span>Hello, {user?.firstName}</span>
              <Button onClick={signUserOut} isLoading={isLoading}>
                Sign Out
              </Button>
            </div>
          ) : (
            <>
              <Link href="/auth/sign-in">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
