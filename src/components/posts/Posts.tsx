"use client";

import PostCard from "./PostCard";
import axios from "axios";
import { useQuery } from "react-query";
import { Skeleton } from "@mantine/core";
import { db } from "@/lib/db";

const allPosts = async () => {
  const response = await axios.get("/api/posts/all-posts");
  console.log(response.data);
  return response.data;
};

function Posts() {
  const { data: posts, isLoading } = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"],
  });

  return (
    <section className="mx-auto w-full md:w-3/4 flex flex-col gap-7">
      {posts?.map((post: any) => (
        <Skeleton visible={isLoading} key={post.id}>
          <PostCard post={post} />
        </Skeleton>
      ))}
    </section>
  );
}

export default Posts;
