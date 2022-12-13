import CyclicDb from "@cyclic.sh/dynamodb";
const db = CyclicDb("fragile-galoshes-batCyclicDB");
// import { v4 as uuidv4 } from 'uuid';

import type { Article } from 'src/routes/editor/+page.server';


const blogs = db.collection("blogs");
const users = db.collection("users");

export async function post(data:Article) {
	await blogs.set(crypto.randomUUID(),data);
}

export async function put(key:string,data:Article) {
	await blogs.set(key,data);
}

export async function deleteBlog(id:string){
	await blogs.delete(id);
}


export async function getAll() {
	const { results: articleMetaData } = await blogs.list();

	const articles = await Promise.all(
		articleMetaData.map(async ({ key }:{key: string}) => ({...(await blogs.get(key)).props,key}))
	);

	return articles;
}


export async function getAdmin(){
	const admin = await users.get("admin");
	return admin;
}

export async function getSingleArticle(key:string){
	const article = await blogs.get(key);
	// console.log(article)
	return article;
}

