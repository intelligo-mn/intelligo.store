import { useRouter } from 'next/router';

export function useIsHomePage() {
  const router = useRouter();
  return router.pathname === '/[[...pages]]';
}
