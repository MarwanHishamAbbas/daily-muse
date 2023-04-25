"use client";

import Link from "next/link";
import Button from "./common/Button";
import { Card, Image } from "@mantine/core";
import Paragraph from "./common/Paragraph";
import LargeHeading from "./common/LargeHeading";
import { Post } from "@prisma/client";

function BlogCard({ post }: { post: Post }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" className="">
      <Image src="/demo.jpeg" alt="Norway" className=" object-fill" />

      <LargeHeading size="sm" className="text-left mt-10">
        {post?.title}
      </LargeHeading>

      <Paragraph size="sm" className="text-left text-gray-500">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Paragraph>
      <Link href={`/post/${post.id}`}>
        <Button className="mx-auto">Read Article</Button>
      </Link>
      <article className="prose prose-slate">{"#Hello"}</article>
    </Card>
  );
}

export default BlogCard;
