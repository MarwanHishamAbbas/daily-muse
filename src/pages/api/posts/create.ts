import { CreatePostData } from "@/types";
import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json("Please Sign in to create a post");
  }
  const data = req.body;
  console.log(data);
  return res.status(200).json({ data });
}
