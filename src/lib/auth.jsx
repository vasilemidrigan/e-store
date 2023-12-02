import { medusa } from "src/medusa-config";

/* API Auth */

export async function createSession(email, password) {
  medusa.admin.auth
    .createSession({
      email: email,
      password: password,
    })
    .then(({ user }) => {
      console.log(`${user.role} is logged in: `, user);
    });
}

export async function adminLogin(email, password) {
  return await medusa.admin.auth
    .getToken({
      email: email,
      password: password,
    })
    .then(({ access_token }) => {
      console.log("Access token generated: ", access_token);
      return access_token;
    });
}

export async function getCurrentUser() {
  medusa.admin.auth.getSession().then(({ user }) => {
    console.log(user);
  });
}
