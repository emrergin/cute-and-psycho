import CyclicDb from "@cyclic.sh/dynamodb";
const db = CyclicDb("fragile-galoshes-batCyclicDB");
import { v4 as uuidv4 } from 'uuid';

import type { Article } from 'src/routes/editor/+page.server';


const blogs = db.collection("blogs");
const users = db.collection("users");

export async function post(data:Article) {
	await blogs.set(uuidv4(),data);
}

export async function getAll() {
	const { results: articleMetaData } = await blogs.list();

	const articles = await Promise.all(
		articleMetaData.map(async ({ key }:{key: string}) => ({...(await blogs.get(key)).props,key}))
	);

	return articles;
}

export async function deleteBlog(id:string){
	await blogs.delete(id);
}

export async function getAdmin(){
	const admin = await users.get("admin");
	return admin;
}

