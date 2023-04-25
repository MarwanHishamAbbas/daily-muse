import { CreatePostData } from "@/types";
import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { session } = getAuth(req);
  if (!session) {
    return res.status(401).json({ message: "Please Sign in to create a post" });
  }
  const values = req.body;
  console.log(values);
}
