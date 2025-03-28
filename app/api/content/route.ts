const posts = ["random content to cull - testing api endpoint - return as json"]

import {NextResponse} from 'next/server';
export async function GET() {
    return NextResponse.json(posts);
}