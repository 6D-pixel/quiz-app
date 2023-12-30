import { NextResponse } from 'next/server';
import connectToMongoDB from '../../lib/server-connect';
import Questions from '../../lib/model'
export async function GET(res: NextResponse) {
    connectToMongoDB();
    const questions = await Questions.find();
    return NextResponse.json(questions)
}
