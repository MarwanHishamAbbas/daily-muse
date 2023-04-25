"use client";

import { Group, Collapse } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import CreatePostForm from "../form/CreatePostForm";
import Button from "../common/Button";
import { Book } from "lucide-react";

const CreatePostModal = ({}) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className="mt-10 ">
      <Group position="center" mb={10}>
        <Button onClick={toggle}>
          <Book />
          New Post
        </Button>
      </Group>

      <Collapse in={opened}>
        <CreatePostForm />
      </Collapse>
    </div>
  );
};

export default CreatePostModal;
