'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link'; // ❗ lowercase "link", not "Link"

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'loading') {
    return <>...</>; // ❗ need to return this
  }

  if (status === 'authenticated') {
    return (
      <Link href="/dashboard">
        <Image
          src={session.user?.image ?? '/globe.svg'}
          width={40} // ❗ fill in width and height
          height={40}
          alt="User profile"
        />
      </Link>
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>; // ❗ you probably want a label
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>; // ❗ same here
}
