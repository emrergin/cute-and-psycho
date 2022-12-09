import * as api from '$lib/api';

export async function load() {

    const articles = await api.getAll();
	return {
		articles
	};
}