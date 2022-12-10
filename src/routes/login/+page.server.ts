import type { PageServerLoad, Actions } from './$types';
import { redirect, invalid } from '@sveltejs/kit';
import { loginUser } from '$lib/loginUser';

export const load: PageServerLoad = (event) => {
	const user = event.locals.user;

	if (user) {
		throw redirect(302, '/admin');
	}
};

export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());

		if (!formData.username || !formData.password) {
			return invalid(400, {
				error: 'Missing email or password'
			});
		}

		const { username, password } = formData as { username: string; password: string };

		const { error, token } = await loginUser(username, password);

		if (error) {
			return invalid(401, {
				error
			});
		}

		// Set the cookie
		event.cookies.set('AuthorizationToken', `Bearer ${token}`, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 // 1 day
		});

		throw redirect(302, '/admin');
	}
};