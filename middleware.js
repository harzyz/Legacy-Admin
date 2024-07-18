import { NextResponse } from 'next/server';

export function middleware(req) {
    console.log("middleware is running")

  return NextResponse.next();
}

