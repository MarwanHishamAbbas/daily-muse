"use client";

import { useUser } from "@clerk/nextjs";
import { Avatar, Card, Divider, TypographyStylesProvider } from "@mantine/core";
import LargeHeading from "../common/LargeHeading";

const PostCard = ({ post }: { post: any }) => {
  return (
    <Card withBorder shadow="sm" p={20}>
      <div className="flex gap-5">
        <Avatar
          radius="xl"
          size="lg"
          src={post.author?.profileImageUrl}
          alt="User Image"
        />
        <div className="flex flex-col items-start">
          <strong>{post.author?.fullName}</strong>
          <span className="text-gray-500">
            {post.author?.primaryEmailAddress?.emailAddress}
          </span>
          <span>{post.timestamp} ago</span>
        </div>
      </div>
      <Divider my="sm" pb={4} />
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
    </Card>
  );
};

export default PostCard;
