import * as api from "$lib/api";
import type { Actions } from "./$types";
import sendMail from "$lib/sendMail";

export async function load() {
  const articles = await api.getAll();
  return {
    articles,
  };
}

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const posta = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      phone: data.get("phone"),
    };
    const mailResult = await sendMail(
      posta.name as string,
      posta.email as string,
      posta.message as string,
      posta.phone as string,
    );
    return mailResult;
  },
};
