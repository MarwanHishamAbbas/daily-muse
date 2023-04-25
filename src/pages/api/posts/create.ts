import { db } from "@/lib/db";
import { CreatePostData } from "@/types/api";
import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreatePostData>
) {
  const { userId } = getAuth(req);
  if (!userId) {
    return res
      .status(401)
      .json({ error: "Please Sign in before", createdPost: null });
  }

  const data = req.body;
  try {
    const result = await db.post.create({
      data: {
        title: data.title,
        authorId: userId,
      },
    });
    return res.status(200).json({ createdPost: result, error: null });
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Error Creating new Post", createdPost: null });
  }
}
