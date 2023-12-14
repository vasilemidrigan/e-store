import { medusa } from "src/medusa-config";

/* API Auth */

/* write */
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

/* read */
export async function adminLogin(email, password) {
  return await medusa.admin.auth
    .getToken({
      email: email,
      password: password,
    })
    .then(({ access_token }) => {
      return access_token;
    });
}

export async function getCurrentUser() {
  medusa.admin.auth.getSession().then(({ user }) => {
    console.log(user);
  });
}

/* delete */
export async function deleteSession() {
  medusa.admin.auth.deleteSession();
}
