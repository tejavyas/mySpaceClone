'use client';

import { SessionProvider } from 'next-auth/react';

type Props = {
    children : React.ReactNode;
};

// wraps ReactNode instance in the session provider for authentication
export default function AuthProvider({ children } : Props) {
    return <SessionProvider>{children}</SessionProvider>
}