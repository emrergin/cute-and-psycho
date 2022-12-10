import * as api from '$lib/api';

export async function load() {

    const articles = await api.getAll();
	// console.log(articles)
	return {
		articles
	};
}