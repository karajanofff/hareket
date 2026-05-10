import { clearSession } from "@/lib/auth";
import { localRedirect } from "@/lib/localRedirect";

export async function POST(request: Request) {
  await clearSession();
  return localRedirect("/", request);
}
