import { account, ID } from "./config";

export async function registerUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    await account.create(ID.unique(), email, password, name);

    loginUser({ email: email, password: password });
  } catch (err) {
    console.error(err);
  }
}

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    await account.createEmailPasswordSession(email, password);
    document.cookie.split(";").forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    });
  } catch (err) {
    console.error(err);
  }
}

export async function getAccount() {
  try {
    return await account.get();
  } catch (err) {
    console.error(err);
  }
}

export async function logout() {
  try {
    await account.deleteSessions();
  } catch (err) {
    console.error(err);
  }
}
