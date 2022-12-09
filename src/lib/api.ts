// import { error } from '@sveltejs/kit';


import CyclicDb from "@cyclic.sh/dynamodb";
const db = CyclicDb("fragile-galoshes-batCyclicDB");
import { v4 as uuidv4 } from 'uuid';


const blogs = db.collection("blogs");

async function send({ data }) {
	// const opts = { method, headers: {} };

	// if (data) {
	// 	opts.headers['Content-Type'] = 'application/json';
	// 	opts.body = JSON.stringify(data);
	// }

	await blogs.set(uuidv4(),data);
	

	// if (token) {
	// 	opts.headers['Authorization'] = `Token ${token}`;
	// }

	// const res = await fetch(`${base}/${path}`, opts);
	// if (res.ok || res.status === 422) {
	// 	const text = await res.text();
	// 	return text ? JSON.parse(text) : {};
	// }

	// throw error(res.status);
}

export function post(data) {
	return send({data });
}
