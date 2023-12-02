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
