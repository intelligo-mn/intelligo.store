import { CoreApi } from '@framework/utils/core-api';
import { API_ENDPOINTS } from '@framework/utils/endpoints';

export type LoginInputType = {
  email: string;
  password: string;
};
export type RegisterUserInputType = {
  name: string;
  email: string;
  password: string;
};

export type ChangePasswordInputType = {
  oldPassword: string;
  newPassword: string;
};
export type ForgetPasswordInputType = {
  email: string;
};
export type ResetPasswordInputType = {
  email: string;
  token: string;
  password: string;
};
export type VerifyPasswordInputType = {
  email: string;
  token: string;
};
export type SocialLoginInputType = {
  provider: string;
  access_token: string;
};
export type SendOtpCodeInputType = {
  phone_number: string;
};
export type VerifyOtpInputType = {
  phone_number: string;
  code: string;
  otp_id: string;
};
export type OtpLoginInputType = {
  phone_number: string;
  code: string;
  otp_id: string;
  name?: string;
  email?: string;
};
export type UpdateContactInput = {
  phone_number: string;
  code: string;
  otp_id: string;
  user_id: string;
};

class Auth extends CoreApi {
  login(input: LoginInputType) {
    return this.http.post(API_ENDPOINTS.LOGIN, input).then((res) => res.data);
  }
  socialLogin(input: SocialLoginInputType) {
    return this.http
      .post(API_ENDPOINTS.SOCIAL_LOGIN, input)
      .then((res) => res.data);
  }
  sendOtpCode(input: SendOtpCodeInputType) {
    return this.http
      .post(API_ENDPOINTS.SEND_OTP_CODE, input)
      .then((res) => res.data);
  }
  verifyOtpCode(input: VerifyOtpInputType) {
    return this.http
      .post(API_ENDPOINTS.VERIFY_OTP_CODE, input)
      .then((res) => res.data);
  }
  otpLogin(input: OtpLoginInputType) {
    return this.http
      .post(API_ENDPOINTS.OTP_LOGIN, input)
      .then((res) => res.data);
  }
  updateContact(input: UpdateContactInput) {
    return this.http
      .post(API_ENDPOINTS.UPDATE_CONTACT, input)
      .then((res) => res.data);
  }
  register(input: RegisterUserInputType) {
    return this.http
      .post(API_ENDPOINTS.REGISTER, input)
      .then((res) => res.data);
  }
  logout() {
    return this.http.post(API_ENDPOINTS.LOGOUT);
  }
  changePassword(input: ChangePasswordInputType) {
    return this.http
      .post(API_ENDPOINTS.CHANGE_PASSWORD, input)
      .then((res) => res.data);
  }
  forgetPassword(input: ForgetPasswordInputType) {
    return this.http
      .post(API_ENDPOINTS.FORGET_PASSWORD, input)
      .then((res) => res.data);
  }
  resetPassword(input: ResetPasswordInputType) {
    return this.http
      .post(API_ENDPOINTS.RESET_PASSWORD, input)
      .then((res) => res.data);
  }
  verifyForgetPassword(input: VerifyPasswordInputType) {
    return this.http
      .post(API_ENDPOINTS.VERIFY_FORGET_PASSWORD, input)
      .then((res) => res.data);
  }
}

export const AuthService = new Auth('auth');
