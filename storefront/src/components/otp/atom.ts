import { atom } from 'jotai';
interface OtpState {
  step: 'PhoneNumber' | 'RegisterForm' | 'OtpForm';
  otpId: string | null;
  isContactExist: boolean;
  phoneNumber: string;
}
export const initialOtpState: OtpState = {
  step: 'PhoneNumber',
  isContactExist: false,
  otpId: null,
  phoneNumber: '',
};
export const optAtom = atom<OtpState>(initialOtpState);
