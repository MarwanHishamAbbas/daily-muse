"use client";

import PostCard from "./PostCard";
import axios from "axios";
import { useQuery } from "react-query";
import { CreatePostData } from "@/types/api";

const allPosts = async () => {
  const response = await axios.get("/api/posts/all-posts");
  return response.data;
};

function Posts() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"],
  });
  if (error) return error;
  if (isLoading) return "Loading.....";

  return (
    <section className="mx-auto w-full md:w-3/4">
      {posts?.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default Posts;
