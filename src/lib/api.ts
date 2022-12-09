// import { error } from '@sveltejs/kit';
// import { AWS_REGION,AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY,AWS_SESSION_TOKEN } from '$env/static/private';


import CyclicDb from "@cyclic.sh/dynamodb";
const db = CyclicDb("fragile-galoshes-batCyclicDB");
import { v4 as uuidv4 } from 'uuid';

import type { Article } from 'src/routes/editor/+page.server';


const blogs = db.collection("blogs");

export async function post(data:Article) {
	await blogs.set(uuidv4(),data);
}

export async function getAll() {
	const { results: articleMetaData } = await blogs.list();

	const articles = await Promise.all(
		articleMetaData.map(async ({ key }:{key: string}) => (await blogs.get(key)).props)
	);

	return articles;
}

export async function deleteBlog(id:string){
	await blogs.delete(id);
}

