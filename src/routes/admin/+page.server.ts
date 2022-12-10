import * as api from '$lib/api';
import {  redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load:PageServerLoad = async function ({ locals }) {
	if (!locals.user) throw redirect(302, `/login`);

	const articles = await api.getAll();
	return {
		articles
	};
}