import { redirect } from 'next/navigation';
import { account, ID } from './config';

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
    await account.createEmailPasswordSession(email, password);
    redirect('/');
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
    await account.deleteSessions();
    redirect(redirectURL);
  } catch (err) {
    console.error(err);
  }
}
