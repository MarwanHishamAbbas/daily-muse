import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const allPosts = await db.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(allPosts);
  } catch (error) {
    res.status(403).json({ err: "Error Occured Fetching The Posts" });
  }
}
