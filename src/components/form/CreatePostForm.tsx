"use client";

import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import MarkdownEditor from "@/components/MarkdownEditor";
import { TextInput } from "@mantine/core";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<any>();
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();
  let toastPostID: string;

  // Create a post
  const { mutate } = useMutation(
    async (title: string) =>
      await axios.post("/api/posts/create", {
        title,
        content,
      }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error.message, { id: toastPostID });
        }
        setIsDisabled(false);
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["posts"]);
        toast.success("Post has been made", { id: toastPostID });
        setTitle("");
        setContent(null);
        setIsDisabled(false);
        router.replace("/");
      },
    }
  );
  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    toastPostID = toast.loading("Creating your post", { id: toastPostID });
    mutate(title);
  };

  return (
    <form
      onSubmit={submitPost}
      className="bg-white rounded-md flex flex-col gap-7 w-full md:w-1/2 mx-auto "
    >
      <div className="flex flex-col ">
        <TextInput
          name="title"
          placeholder="Article Title"
          value={title}
          onChange={(event) => setTitle(event.currentTarget.value)}
        />
      </div>

      <MarkdownEditor setContent={setContent} />
      <Button
        className="flex justify-center"
        isLoading={isDisabled}
        type="submit"
      >
        Create post
      </Button>
    </form>
  );
}
