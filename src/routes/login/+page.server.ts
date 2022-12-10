import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';
import type { PageServerLoad, Actions } from './$types';
import { loginUser } from '$lib/loginUser';

export const load: PageServerLoad = ({ locals }) => {

	if (locals.user) {
		throw redirect(307, '/admin');
	}
};

/** @type {import('./$types').Actions} */
export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const username = data.get('username')as string;
		const password = data.get('password')as string;

		const { error, token } = await loginUser(username, password);


		if (error) {
			return invalid(401, {error});
		}

		const value = btoa(JSON.stringify(token));
		// console.log(value)
		cookies.set('jwt', value, { path: '/' });

		throw redirect(307, '/');
	}
};





// import { redirect, invalid } from '@sveltejs/kit';




// export const actions: Actions = {
// 	default: async (event) => {
// 		const formData = Object.fromEntries(await event.request.formData());

// 		if (!formData.username || !formData.password) {
// 			return invalid(400, {
// 				error: 'Missing email or password'
// 			});
// 		}

// 		const { username, password } = formData as { username: string; password: string };

// 		const { error, token } = await loginUser(username, password);

// 		if (error) {
// 			return invalid(401, {
// 				error
// 			});
// 		}
// 		// console.log(token);
// 		// // Set the cookie
// 		// event.cookies.set('jwt', `Bearer ${token}`, {
// 		// 	httpOnly: true,
// 		// 	path: '/',
// 		// 	secure: true,
// 		// 	sameSite: 'strict',
// 		// 	maxAge: 60 * 60 * 24 // 1 day
// 		// });
// 		const value = btoa(JSON.stringify(body.user));
// 		cookies.set('jwt', value, { path: '/' });

// 		throw redirect(302, '/admin');
// 	}
// };