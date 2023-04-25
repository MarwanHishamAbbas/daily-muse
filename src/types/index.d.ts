import { Post } from "@prisma/client";
import { type ZodIssue } from "zod";
export interface CreatePostData {
  createdPost: Post | null;
  error: string | ZodIssue[] | null;
}
