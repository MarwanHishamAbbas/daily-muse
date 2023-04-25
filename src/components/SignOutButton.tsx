"use client";
import { useAuth } from "@clerk/nextjs";
import Button from "./common/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignOutButton = ({ ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { signOut } = useAuth();
  const signUserOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      throw new Error("Error Signing Out");
    } finally {
      setIsLoading(false);
      router.replace("/auth/sign-in");
    }
  };
  return (
    <Button {...props} isLoading={isLoading} onClick={signUserOut}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
