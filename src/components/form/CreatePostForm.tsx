"use client";

import { useMutation, useQueryClient } from "react-query";

import { useState } from "react";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import Button from "@/components/common/Button";

import { TextInput } from "@mantine/core";
import { PlusIcon } from "lucide-react";
import MarkdownEditor from "./MarkdownEditor";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(false);
  const queryClient = useQueryClient();
  let toastPostID: string;

  // Create a post

  const { mutate } = useMutation(
    async (title: string) => {
      await axios.post("/api/posts/create", {
        title,
        content,
      });
    },

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
        setContent("");
        setIsDisabled(false);
      },
    }
  );
  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    if (!title || !content) {
      toast.error("Title or Content Can't be empty");
      setIsDisabled(false);
      return;
    }
    toastPostID = toast.loading("Creating your post", { id: toastPostID });

    mutate(title);
  };

  return (
    <form
      className="mx-auto mt-5 bg-gray-200 rounded-md p-4"
      onSubmit={submitPost}
    >
      <div className="flex flex-col ">
        <TextInput
          py={10}
          name="title"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.currentTarget.value)}
        />
        <MarkdownEditor setContent={setContent} />
      </div>

      <Button className="mx-auto mt-7" isLoading={isDisabled} type="submit">
        <PlusIcon />
        Create post
      </Button>
    </form>
  );
}
