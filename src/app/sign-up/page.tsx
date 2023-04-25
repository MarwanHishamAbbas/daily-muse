"use client";

import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

const SignUpPage = () => (
  <body className="h-screen w-full flex items-center justify-between overflow-hidden">
    <Image
      src="/auth-pattern.png"
      alt="Authentication Pattern"
      width={1000}
      height={1000}
      className="h-full w-full lg:basis-1/2 object-cover hidden lg:block"
    />
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </body>
);

export default SignUpPage;
