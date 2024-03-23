import { FreshContext } from "$fresh/server.ts";
import { cookieSession, WithSession } from "fresh-session";

export type State = { reportId?: string } & WithSession;

const session = cookieSession();

function sessionHandler(req: Request, ctx: FreshContext<State>) {
  return session(req, ctx);
}
export const handler = [sessionHandler];
