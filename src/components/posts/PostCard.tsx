"use client";

import { CreatePostData } from "@/types/api";
import LargeHeading from "../common/LargeHeading";
import { TypographyStylesProvider } from "@mantine/core";

const PostCard = ({ post }: { post: CreatePostData }) => {
  return (
    <div>
      <LargeHeading size="sm">{post.createdPost?.title}</LargeHeading>
      <TypographyStylesProvider>
        <div
          dangerouslySetInnerHTML={{
            __html: "<h1>Hello</h1>" as string,
          }}
        />
      </TypographyStylesProvider>
    </div>
  );
};

export default PostCard;
