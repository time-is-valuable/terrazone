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

    await loginUser({ email: email, password: password });
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
