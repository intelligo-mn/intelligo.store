export interface IEnvironment {
  production: boolean;
  envName: string;
  env?: Env;
  apiUrl: string;
  docUrl: string;
  awsConfig: AWSConfig;
  redirectSignInApp: string;
  redirectSignOutApp: string;
  redirectSignInWeb: string;
  redirectSignOutWeb: string;
  sentryApp: {
    dns: string;
  };
  sentryWeb: {
    dns: string;
  };
}

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface Env {
  LOG_LEVEL: LogLevel;
  [key: string]: string;
}

interface Oauth {
  domain: string;
  scope: string[];
  redirectSignIn: string;
  redirectSignOut: string;
  responseType: string;
}

interface AwsCognitoPasswordProtectionSettings {
  passwordPolicyMinLength: number;
  passwordPolicyCharacters: any[];
}

interface AwsCloudLogicCustom {
  name: string;
  endpoint: string;
  region: string;
}

export interface AWSConfig {
  aws_project_region: string;
  aws_cognito_identity_pool_id: string;
  aws_cognito_region: string;
  aws_user_pools_id: string;
  aws_user_pools_web_client_id: string;
  oauth?: Oauth;
  federationTarget: string;
  aws_cognito_username_attributes: string[];
  aws_cognito_social_providers: string[];
  aws_cognito_signup_attributes: string[];
  aws_cognito_mfa_configuration: string;
  aws_cognito_mfa_types: string[];
  aws_cognito_password_protection_settings: AwsCognitoPasswordProtectionSettings;
  aws_cognito_verification_mechanisms: string[];
  aws_appsync_graphqlEndpoint: string;
  aws_appsync_region: string;
  aws_appsync_authenticationType: string;
  aws_appsync_apiKey: string;
  aws_cloud_logic_custom: AwsCloudLogicCustom[];
  aws_mobile_analytics_app_id: string;
  aws_mobile_analytics_app_region: string;
  aws_user_files_s3_bucket: string;
  aws_user_files_s3_bucket_region: string;
}
