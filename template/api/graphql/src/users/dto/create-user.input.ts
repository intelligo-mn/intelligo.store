import {
  InputType,
  ObjectType,
  PartialType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql';
import { User } from '../entities/user.entity';

enum Permission {
  SUPER_ADMIN = 'Super admin',
  STORE_OWNER = 'Store owner',
  STAFF = 'Staff',
  CUSTOMER = 'Customer',
}
registerEnumType(Permission, { name: 'Permission' });
@InputType()
export class RegisterInput extends PickType(User, [
  'name',
  'email',
  'password',
]) {
  permission: Permission = Permission.CUSTOMER;
}

@InputType()
export class LoginInput extends PartialType(
  PickType(User, ['email', 'password']),
) {}

@InputType()
export class SocialLoginInput {
  provider: string;
  access_token: string;
}
@InputType()
export class ChangePasswordInput {
  oldPassword: string;
  newPassword: string;
}
@InputType()
export class ForgetPasswordInput {
  email: string;
}
@InputType()
export class VerifyForgetPasswordTokenInput {
  email: string;
  token: string;
}
@InputType()
export class ResetPasswordInput {
  email: string;
  token: string;
  password: string;
}

@ObjectType()
export class AuthResponse {
  token: string;
  permissions: string[];
}
@ObjectType()
export class PasswordChangeResponse {
  success: boolean;
  message: string;
}
@InputType()
export class VerifyOtpInput {
  otp_id: string;
  code: string;
  phone_number: string;
}
@ObjectType()
export class OtpResponse {
  id: string;
  message: string;
  success: boolean;
  phone_number: string;
  provider: string;
  is_contact_exist: boolean;
}
@InputType()
export class OtpInput {
  phone_number: string;
}
@InputType()
export class OtpLoginInput {
  otp_id: string;
  code: string;
  phone_number: string;
  name?: string;
  email?: string;
}
