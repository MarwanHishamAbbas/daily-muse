"use client";

import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();
  let toastPostID: string;

  // Create a post
  const { mutate } = useMutation(
    async (title: string) =>
      await axios.post("/api/posts/create", {
        title,
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
    <form onSubmit={submitPost} className="bg-white rounded-md ">
      <div className="flex flex-col ">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          name="title"
          placeholder="What's on your mind?"
          className=""
        />
      </div>
      <div className=" flex items-center justify-between gap-2">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-gray-700"
          } `}
        >{`${title.length}/300`}</p>
        <Button isLoading={isDisabled} type="submit">
          Create post
        </Button>
      </div>
    </form>
  );
}
