import type { Handle } from "@sveltejs/kit";
export const handle: Handle = async function ({ event, resolve }) {
  const jwt = event.cookies.get("jwt");
  event.locals.user = jwt ? JSON.parse(atob(jwt)) : null;

  return resolve(event);
};
