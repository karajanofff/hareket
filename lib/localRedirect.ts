import { NextResponse } from "next/server";

export function localRedirect(path: string, request: Request) {
  const url = new URL(path, request.url);

  if (process.env.NODE_ENV !== "production" && url.hostname === "localhost") url.protocol = "http:";

  return NextResponse.redirect(url);
}
