import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { loginUser } from '$lib/loginUser';

export const load: PageServerLoad = ({ locals }) => {

	if (locals.user) {
		throw redirect(307, '/admin');
	}
};

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const username = data.get('username')as string;
		const password = data.get('password')as string;

		const { error, token } = await loginUser(username, password);


		if (error) {
			return fail(401, {error});
		}

		const value = btoa(JSON.stringify(token));
		cookies.set('jwt', value, { path: '/' });

		throw redirect(307, '/admin');
	}
};

