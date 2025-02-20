import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { getPost, updatePost } from "$lib/api";

export const load: PageServerLoad = async function ({ locals, params }) {
  if (!locals.user) redirect(302, `/login`);

  const article = await getPost(Number(params.slug));
  return article;
};

/** @type {import('./$types').Actions} */
export const actions: Actions = {
  default: async ({ locals, params, request }) => {
    if (!locals.user) error(401);

    const data = await request.formData();
    const article = {
      title: (data.get("title") as string) || "Untitled",
      description: (data.get("description") as string) || "",
      body: (data.get("body") as string) || "",
      taglist: data.getAll("tag") as string[],
      image: data.get("imageLink") as string,
    };
    await updatePost(Number(params.slug), article);

    redirect(303, `/posts/${params.slug}`);
  },
};
