import LargeHeading from "@/components/common/LargeHeading";
import CreatePostForm from "@/components/form/CreatePostForm";
import { Metadata } from "next";
import { FC } from "react";
export const metadata: Metadata = {
  title: "Daily Muse | Create Post",
};

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section>
      <LargeHeading className="mb-16">Create New Post</LargeHeading>
      <CreatePostForm />
    </section>
  );
};

export default page;
