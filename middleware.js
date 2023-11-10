import { NextResponse } from "next/server";

export function middleware(request) {
  //   if (request.nextUrl.pathname != "/home") {
  return NextResponse.redirect(new URL("/", request.url));
  //   }
}

// applying middleware to matching urls only

export const config = {
  matcher: ["/about/:path", "/login/:path"],
};
