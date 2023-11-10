import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname != "/home") {
    return NextResponse.redirect(new URL("/home", request.url));
  }
}
