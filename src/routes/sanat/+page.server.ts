import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ locals }) => {
  if (!locals.user) {
    redirect(
      307,
      "https://docs.google.com/forms/d/e/1FAIpQLSfSw-Z9g6SyLHk2HydkJE7cPTWfIbdQT5NE-Je_QNySdLdBBg/viewform?usp=sf_link"
    );
  }
};
