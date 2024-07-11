'use client';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
} from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { loginUser } from '~/appwrite/authAPIFunc';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Card className="h-[430px] w-[450px] bg-[#1a1a1a] border-[#2D2D31] border-[.1rem]">
      <CardHeader>
        <CardTitle className="font-normal text-center text-[2rem]">
          Welcome back to Terrazone
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <Label
            className="font-normal py-[12rem] text-[0.875rem]"
            htmlFor="email"
          >
            Email
          </Label>
          <Input
            className="opacity-50 border-[.1rem] border-[#2D2D31] text-[0.875rem]"
            placeholder="Your email"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <Label
            className="font-normal py-[12rem] text-[0.875rem]"
            htmlFor="password"
          >
            Password
          </Label>
          <Input
            className="opacity-50 border-[.1rem] border-[#2D2D31] text-[0.875rem]"
            placeholder="Your password"
            type="password"
            id="email"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-between min-h-[7.5rem]">
        <Button
          className="text-[0.875rem] w-full bg-transparent text-white border-[.1rem] border-[#2D2D31]"
          onClick={(e) => {
            e.preventDefault();
            LoginUser({ email: email, password: password, redirectURL: "/"});
          }}
        >
          Login
        </Button>
        <span className="font-normal text-[0.875rem]">
          {`Don't have an account? `}
          <Button className="p-0" variant="link">
            <Link href="/register">Register</Link>
          </Button>
        </span>
      </CardFooter>
    </Card>
  );
}
