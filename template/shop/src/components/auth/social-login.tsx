import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useSocialLogin } from '@/framework/user';

const SocialLogin = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const { mutate: socialLogin, error } = useSocialLogin();
  useEffect(() => {
    // is true when valid social login access token and provider is available in the session
    // but not authorize/logged in
    if (session?.access_token && session?.provider) {
      socialLogin({
        provider: session.provider as string,
        access_token: session.access_token as string,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null;

  return <div>{error}</div>;
};

export default SocialLogin;
