import * as api from '$lib/api';
import type {  Actions } from './$types';
import { error } from '@sveltejs/kit';
import sendMail from '$lib/sendMail';

export async function load() {

    const articles = await api.getAll();
	return {
		articles
	};
}

export const actions: Actions = {
	default: async ({  locals, request }) => {
		if (!locals.user) throw error(401);
		const data = await request.formData();
		const posta = {	
					name: data.get('name'),
					email: data.get('email'),
					message: data.get('message')
				}
	//   sendEmail(posta);
		sendMail(posta.name as string,posta.email as string,posta.message as string);
	
		return { success: true };
	}
};