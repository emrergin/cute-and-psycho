import * as api from "$lib/api.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ params }) {
  const { props } = await api.getSingleArticle(params.slug);
  return props;
};
