import { AUTH_TOKEN_KEY } from '@/lib/constants';
import { atom } from 'jotai';
import Cookies from 'js-cookie';

export function checkIsLoggedIn() {
  const token = Cookies.get(AUTH_TOKEN_KEY);
  if (!token) return false;
  return true;
}
export const authorizationAtom = atom(checkIsLoggedIn());
