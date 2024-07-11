import { redirect } from 'next/navigation';
import { account, ID } from '~/appwrite/config';

export async function RegisterUser({
  name,
  email,
  password,
  redirectURL,
}: {
  name: string;
  email: string;
  password: string;
  redirectURL: string;
}) {
  try {
    await account.create(ID.unique(), email, password, name);

    await LoginUser({
      email: email,
      password: password,
      redirectURL: redirectURL,
    });
  } catch (err) {
    console.error(err);
  }
}

export async function LoginUser({
  email,
  password,
  redirectURL,
}: {
  email: string;
  password: string;
  redirectURL: string;
}) {
  try {
    const login = await account.createEmailPasswordSession(email, password);

    if (!login) {
      return;
    }

    redirect(redirectURL);
  } catch (err) {
    console.error(err);
  }
}

export async function GetAccount() {
  try {
    return await account.get();
  } catch (err) {
    console.error(err);
  }
}

export async function Logout({ redirectURL }: { redirectURL: string }) {
  try {
    const logout = await account.deleteSessions();

    if (!logout) {
      return;
    }

    redirect(redirectURL);
  } catch (err) {
    console.error(err);
  }
}
