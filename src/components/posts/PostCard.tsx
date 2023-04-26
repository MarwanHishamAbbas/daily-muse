"use client";

import LargeHeading from "../common/LargeHeading";
import { TypographyStylesProvider } from "@mantine/core";

const PostCard = ({ post }: { post: any }) => {
  return (
    <div>
      <LargeHeading className="text-left" size="sm">
        {post.title}
      </LargeHeading>
      <TypographyStylesProvider>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content as string,
          }}
        />
      </TypographyStylesProvider>
    </div>
  );
};

export default PostCard;
