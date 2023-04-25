"use client";

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

const SignInPage = () => (
  <body className="h-screen w-full flex items-center justify-between overflow-hidden">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />

    <Image
      src="/auth-pattern.png"
      alt="Authentication Pattern"
      width={1000}
      height={1000}
      className="h-full w-full lg:basis-1/2 object-cover hidden lg:block"
    />
  </body>
);

export default SignInPage;
