import { error, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';
import type { PageServerLoad,Actions } from './$types';

export const load:PageServerLoad = async function ({ locals, params }) {
	if (!locals.user) throw redirect(302, `/login`);

	const {props} = await api.getSingleArticle(params.slug);
	// console.log(props);
	return props;
}

/** @type {import('./$types').Actions} */
// export const actions = {
export const actions:Actions = {
	default: async ({ locals, params, request }) => {
		if (!locals.user) throw error(401);

		const data = await request.formData();
        const article = {	
            title: data.get('title'),
            description: data.get('description'),
            body: data.get('body'),
            tagList: data.getAll('tag')
        }
		await api.put(params.slug,article);

		throw redirect(303, `/posts/${params.slug}`);
	}
};