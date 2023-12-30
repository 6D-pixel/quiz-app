import { NextResponse } from "next/server";
import connectToMongoDB from "../../lib/server-connect";
import Questions from "../../lib/model";

connectToMongoDB();
export async function GET(res) {
  const questions = await Questions.find();
  return NextResponse.json(questions);
}
