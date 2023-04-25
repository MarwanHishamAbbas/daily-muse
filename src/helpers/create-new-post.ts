import { CreatePostData } from "@/types";

export default async function createNewPost(values: any) {
  const res = await fetch("/api/post/create", {
    method: "POST",
    body: JSON.stringify(values),
  });
  const data = (await res.json()) as CreatePostData;

  if (data.error || !data.createdPost) {
    if (data.error instanceof Array) {
      throw new Error(data.error.join(""));
    }
  }
  return data.createdPost;
}
