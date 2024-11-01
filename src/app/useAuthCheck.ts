"use client"
// useAuthCheck.ts
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';

const useAuthCheck = () => {
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login'); // Redirect to login if there's no token
    }
  }, [token, router]);
};

export default useAuthCheck;
