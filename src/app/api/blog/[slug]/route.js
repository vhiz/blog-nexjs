import { Post } from "@/lib/Posts";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDB();
    const post = await Post.findOne({slug});
    return NextResponse.json(post);
  } catch (error) {
    throw new Error(error);
  }
};
export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDB();
      await Post.deleteOne({slug});
    return NextResponse.json('Deleted');
  } catch (error) {
    throw new Error(error);
  }
};
