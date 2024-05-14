import { getPost } from "$lib/api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ params }) {
  const article = await getPost(Number(params.slug));
  return article;
};
