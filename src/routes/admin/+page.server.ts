import * as api from '$lib/api';
import {  redirect,error } from '@sveltejs/kit';
import type { PageServerLoad,Actions } from './$types';

export const load:PageServerLoad = async function ({ locals }) {
	if (!locals.user) redirect(302, `/login`);

	const articles = await api.getAll();
	return {
		articles
	};
}


export const actions:Actions = {
	
	delete: async ({ request, locals }) => {
		if (!locals.user) error(401);
		const form = await request.formData();
		await api.deleteBlog(form.get('id') as string);
	}
}