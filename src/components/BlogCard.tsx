"use client";

import Link from "next/link";
import Button from "./common/Button";
import { Card, Image, Text, Badge, Group } from "@mantine/core";
import Paragraph from "./common/Paragraph";
import LargeHeading from "./common/LargeHeading";

function BlogCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" className="flex flex-col gap-3">
      <Image src="/logo.png" alt="Norway" className=" object-fill" />

      <LargeHeading size="sm" className="text-left mt-10">
        Aritle Title
      </LargeHeading>

      <Paragraph size="sm" className="text-left text-gray-500">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Paragraph>

      <Link href="/create-post">
        <Button className="mx-auto">Read Article</Button>
      </Link>
    </Card>
  );
}

export default BlogCard;
