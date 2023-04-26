"use client";

import { Group, Collapse } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import CreatePostForm from "../form/CreatePostForm";
import Button from "../common/Button";
import { Book } from "lucide-react";

const CreatePostModal = ({}) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className="mt-10  flex flex-col items-center">
      <Button onClick={toggle}>
        <Book />
        New Post
      </Button>

      <Collapse in={opened}>
        <CreatePostForm />
      </Collapse>
    </div>
  );
};

export default CreatePostModal;
