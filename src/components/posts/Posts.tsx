import { db } from "@/lib/db";
import PostCard from "./PostCard";

async function Posts() {
  const posts = await db.post.findMany({});
  return (
    <section className="mx-auto w-full md:w-3/4">
      {posts.map((post, idx) => (
        <PostCard key={idx} post={{ createdPost: post, error: null }} />
      ))}
    </section>
  );
}

export default Posts;
