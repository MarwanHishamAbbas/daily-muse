"use client";

import { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Code } from "@mantine/core";
import Button from "@/components/common/Button";
import LargeHeading from "@/components/common/LargeHeading";
import createNewPost from "@/helpers/create-new-post";

function CreatePostPage() {
  const [submittedValues, setSubmittedValues] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm({
    initialValues: {
      title: "",
      coverImage: "",
      content: "",
    },
  });

  const sendPostData = async () => {
    setIsLoading(true);
    try {
      await createNewPost(submittedValues);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full md:w-1/2 mx-auto">
      <LargeHeading className="mb-4">Create New Post</LargeHeading>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.onSubmit((values) => {
          setSubmittedValues(JSON.stringify(values, null, 2));
          sendPostData();
        })}
      >
        <TextInput
          label="Title"
          placeholder="Title"
          {...form.getInputProps("title")}
        />

        <Button isLoading={isLoading} className="mx-auto mt-3" type="submit">
          Create Post
        </Button>
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}
    </section>
  );
}

export default CreatePostPage;
