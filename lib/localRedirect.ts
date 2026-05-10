import { NextResponse } from "next/server";

export function localRedirect(path: string, request: Request) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = forwardedHost ?? request.headers.get("host") ?? new URL(request.url).host;
  const protocol = request.headers.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "production" ? "https" : "http");
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.RENDER_EXTERNAL_URL;
  const base = appUrl || `${protocol}://${host}`;
  const url = new URL(path, base);

  return NextResponse.redirect(url);
}
