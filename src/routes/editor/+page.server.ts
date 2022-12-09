import type {  Actions } from './$types';
import { post } from '$lib/api';

export interface Article{
	title: FormDataEntryValue | null;
    description: FormDataEntryValue | null;
    body: FormDataEntryValue | null;
    tagList: FormDataEntryValue[];
}
export const actions: Actions = {
  default: async ({  request }) => {
    const data = await request.formData();
	const article = {	
					title: data.get('title'),
					description: data.get('description'),
					body: data.get('body'),
					tagList: data.getAll('tag')
				}
			// });
	// console.log('+',article);
	post(article);
  
    return { success: true };
  }
};