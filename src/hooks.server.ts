// /** @type {import('@sveltejs/kit').Handle} */
import type { Handle } from "@sveltejs/kit";
export const handle: Handle = async function ({ event, resolve }) {
	const jwt = event.cookies.get('jwt');
	// console.log(jwt)
	event.locals.user = jwt ? JSON.parse(atob(jwt)) : null;

	return resolve(event);
}