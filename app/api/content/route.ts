import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {
    // dynamic content
    const session = await getServerSession();
    return NextResponse.json(posts);
}