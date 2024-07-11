import { account, ID } from "./config";
import { redirect } from 'next/navigation'

export async function registerUser({
  name,
  email,
  password,
  redirectURL
}: {
  name: string;
  email: string;
  password: string;
  redirectURL: string;
}) {
  try {
    await account.create(ID.unique(), email, password, name);

    await loginUser({ email: email, password: password, redirectURL: redirectURL });
  } catch (err) {
    console.error(err);
  }
}

export async function loginUser({
  email,
  password,
  redirectURL
}: {
  email: string;
  password: string;
  redirectURL: string;
}) {
  try {
    const login = await account.createEmailPasswordSession(email, password);

    if(!login){
      return;
    }

    redirect(redirectURL);
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

export async function logout({redirectURL}:{redirectURL: string}) {
  try {
    const logout = await account.deleteSessions();

    if(!logout){
      return;
    }

    redirect(redirectURL);
  } catch (err) {
    console.error(err);
  }
}
