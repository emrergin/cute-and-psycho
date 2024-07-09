// import { getAdmin } from "./api";
// import { PASSWORD } from "$env/static/private";
import { env } from "$env/dynamic/private";
import jwt from "jsonwebtoken";

const loginUser = async (username: string, password: string) => {
  if (username !== "admin") {
    return {
      error: "Yetkili değil misin nesin",
    };
  }

  // Verify the password

  if (password !== env.PASSWORD) {
    return {
      error: "Yetkili değil misin nesin",
    };
  }

  const jwtUser = {
    username: "admin",
  };

  const token = jwt.sign(jwtUser, env.JWT_ACCESS_SECRET as string, {
    expiresIn: "1d",
  });

  return { token };
};

export { loginUser };
