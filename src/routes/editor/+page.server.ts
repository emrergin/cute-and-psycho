import type {  Actions } from './$types';
import { post } from '$lib/api';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ locals }) {
	if (!locals.user) throw redirect(302, `/login`);
}

export interface Article{
	title: string | null;
  description: string | null;
  body: string | null;
  tagList: string[]; 
	image: string | null;
}
export const actions: Actions = {
  default: async ({  locals, request }) => {
	if (!locals.user) throw error(401);
    const data = await request.formData();
	const article:Article = {	
					title: data.get('title') as string,
					description: data.get('description') as string,
					body: data.get('body') as string,
					tagList: data.getAll('tag') as string[],
					image: data.get('imageLink') as string
				}
	post(article);
  
    return { success: true };
  }
};