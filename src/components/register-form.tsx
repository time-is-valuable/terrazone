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
import { registerUser } from '~/appwrite/authAPIFunc';

export default function RegisterForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Card className="h-[450px] w-[450px] bg-[#1a1a1a] border-[#2D2D31] border-[.1rem]">
      <CardHeader>
        <CardTitle className="font-normal text-center text-[2rem]">
          Welcome to Terrazone
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <Label
            className="font-normal py-[12rem] text-[0.875rem]"
            htmlFor="name"
          >
            Name
          </Label>
          <Input
            className="opacity-50 border-[.1rem] border-[#2D2D31] text-[0.875rem]"
            placeholder="Your name"
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
      <CardFooter className="flex flex-col items-center justify-between min-h-[6rem]">
        <Button
          className="text-[0.875rem] w-full bg-transparent text-white border-[.1rem] border-[#2D2D31]"
          onClick={(e) => {
            e.preventDefault();
            registerUser({ name: name, email: email, password: password });
          }}
        >
          Sign Up
        </Button>
        <span className="font-normal text-[0.875rem]">
          Already have an account?
          <Button className="p-0" variant="link">
            <Link href="/login">Login</Link>
          </Button>
        </span>
      </CardFooter>
    </Card>
  );
}
