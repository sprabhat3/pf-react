import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    const entries = await sql`SELECT * FROM tbl_contactus;`;
    return NextResponse.json(entries);
 
}