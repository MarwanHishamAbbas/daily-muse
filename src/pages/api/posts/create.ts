import { db } from "@/lib/db";
import { CreatePostData } from "@/types/api";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreatePostData>
) {
  const getCurrentUserId = async () => {
    const { user, userId } = getAuth(req);
    return { user, userId };
  };
  const currentUserId = (await getCurrentUserId()).userId;

  const sessionUser = await clerkClient.users.getUser(currentUserId || "");

  const prismaUser = await db.user.findUnique({
    where: { email: "marwanhiisham@gmail.com" },
  });
  console.log(prismaUser);
  if (!sessionUser) {
    return res
      .status(401)
      .json({ error: "Please Sign in before", createdPost: null });
  }

  const data = req.body;
  try {
    const result = await db.post.create({
      data: {
        title: data.title,
        content: data?.content,
        authorId: prismaUser?.id,
      },
    });
    return res.status(200).json({ createdPost: result, error: null });
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ error: "Error Creating new Post", createdPost: null });
  }
}
