
// API data fetching

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request : Request) {

    const users = await prisma.user.findMany(); // zero or more users that fit the criteria
    console.log(users);
    return NextResponse.json(users);

}