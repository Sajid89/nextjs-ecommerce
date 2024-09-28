'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
    const { data: session } = useSession();

    return (
        <div>
            <h1>Welcome to Next.js E-Commerce</h1>
            {session ? (
                <p>Logged in as {session.user.email}</p>
            ) : (
                <Link href="/auth/signin">Sign In</Link>
            )}
            <nav>
                <Link href="/about">About Us</Link>
                <Link href="/products">Products</Link>
            </nav>
        </div>
    );
}
