import type { Actions } from "./$types";
import { post } from "$lib/api";
import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
// import type { Post } from "$lib/db/schema";
// import type { ColumnType } from "kysely";

export const load: PageServerLoad = async function ({ locals }) {
  if (!locals.user) redirect(302, `/login`);
};

// export interface Article {
//   title: string | null;
//   description: string | null;
//   body: string | null;
//   tagList: string[];
//   image: string | null;
// }
export const actions: Actions = {
  default: async ({ locals, request }) => {
    if (!locals.user) error(401);
    const data = await request.formData();
    const article = {
      title: data.get("title") as string,
      description: data.get("description") as string,
      body: data.get("body") as string,
      taglist: data.getAll("tag") as string[],
      image: data.get("imageLink") as string,
    };
    post(article);

    return { success: true };
  },
};
