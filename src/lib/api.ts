import { env } from "$env/dynamic/private";
import { createKysely } from "@vercel/postgres-kysely";
import type { Database, Post } from "./db/schema";

const POSTGRES_URL = env.POSTGRES_URL;

const db = createKysely<Database>({ connectionString: POSTGRES_URL });

export async function getAll(tag?: string) {
  if (tag) {
    try {
      const allPosts = await db
        .selectFrom("post_psycho")
        .selectAll()
        .orderBy("created_at", "desc")
        // .where(sql`${tag} = ANY(taglist)`)
        .execute();

      return allPosts;
    } catch (e) {
      return [];
    }
  } else {
    const allPosts = await db
      .selectFrom("post_psycho")
      .selectAll()
      .orderBy("id", "desc")
      .execute();
    return allPosts;
  }
}

export async function post(params: Omit<Post, "created_at">) {
  const { title, description, body, taglist, image } = params;
  await db
    .insertInto("post_psycho")
    .values({
      title,
      description,
      body,
      taglist,
      image,
    })
    .execute();
}

export async function getPost(id: number) {
  const post = await db
    .selectFrom("post_psycho")
    .selectAll()
    .where("id", "=", id)
    .execute();

  return post[0];
}

export async function deletePost(id: number) {
  await db
    .deleteFrom("post_psycho")
    .where("post_psycho.id", "=", id)
    .executeTakeFirst();
}

export async function updatePost(id: number, newProperties: Partial<Post>) {
  await db
    .updateTable("post_psycho")
    .set(newProperties)
    .where("id", "=", id)
    .executeTakeFirst();
}
