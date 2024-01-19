import { getAdmin } from "./api";
import bcrypt from "bcryptjs";
// import { JWT_ACCESS_SECRET } from '$env/static/private';
import { env } from "$env/dynamic/private";
import jwt from "jsonwebtoken";

const loginUser = async (username: string, password: string) => {
  const admin = await getAdmin();
  // console.log(admin)
  // console.log(username,password)
  if (username !== "admin") {
    return {
      error: "Yetkili değil misin nesin",
    };
  }

  // Verify the password
  const passwordIsValid = await bcrypt.compare(password, admin.props.password);

  if (!passwordIsValid) {
    return {
      error: "Yetkili değil misin nesin",
    };
  }

  const jwtUser = {
    username: "admin",
  };

  const token = jwt.sign(jwtUser, env.JWT_ACCESS_SECRET, {
    expiresIn: "1d",
  });

  return { token };
};

export { loginUser };
