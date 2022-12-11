import type {  Actions } from './$types';
import { post } from '$lib/api';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ locals }) {
	if (!locals.user) throw redirect(302, `/login`);
}

export interface Article{
	title: FormDataEntryValue | null;
    description: FormDataEntryValue | null;
    body: FormDataEntryValue | null;
    tagList: FormDataEntryValue[];
	image: FormDataEntryValue | null;
}
export const actions: Actions = {
  default: async ({  locals, request }) => {
	if (!locals.user) throw error(401);
    const data = await request.formData();
	const article = {	
					title: data.get('title'),
					description: data.get('description'),
					body: data.get('body'),
					tagList: data.getAll('tag'),
					image: data.get('imageLink')
				}
	post(article);
  
    return { success: true };
  }
};