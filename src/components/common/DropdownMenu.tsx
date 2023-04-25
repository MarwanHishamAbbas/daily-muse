"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import SignOutButton from "../SignOutButton";

export default function DropdownMenu() {
  const { user } = useUser();
  return (
    <div className=" md:hidden ">
      <Menu as="div" className="relative">
        <Menu.Button className="inline-flex w-full justify-center rounded-full text-black text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75">
          <Image
            src={user?.profileImageUrl || ""}
            alt="Current User"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute flex flex-col  divide-y-2 p-2 right-0 mt-2 w-40  origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-2">
              <p className="text-gray-500">{user?.fullName}</p>
            </div>
            <div>
              <Menu.Item as={Link} href="/create-post">
                <Button variant="ghost" className="py-2">
                  Create Post
                </Button>
              </Menu.Item>
              <Menu.Item>
                <SignOutButton className="w-full justify-center mt-2">
                  Sign Out
                </SignOutButton>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
