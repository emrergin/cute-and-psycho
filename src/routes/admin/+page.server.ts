import { redirect, error } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { deletePost, getAll } from "$lib/api";

export const load: PageServerLoad = async function ({ locals }) {
  if (!locals.user) redirect(302, `/login`);

  const articles = await getAll();
  return {
    articles,
  };
};

export const actions: Actions = {
  delete: async ({ request, locals }) => {
    if (!locals.user) error(401);
    const form = await request.formData();
    const postId = form.get("id");
    if (postId) {
      await deletePost(Number(postId));
    }
  },
};
