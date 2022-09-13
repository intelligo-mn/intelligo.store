import { IEnvironment } from './ienvironment';

export const environment: IEnvironment = {
  envName: 'dev',

  apiUrl: 'https://api.platform.sale',
  docUrl: 'https://docs.intelligo.dev',
  production: false,
  awsConfig: {
    aws_project_region: 'ap-southeast-1',
    aws_appsync_graphqlEndpoint:
      'https://272l5hjxjnc57awjj4xfsx2qam.appsync-api.ap-southeast-1.amazonaws.com/graphql',
    aws_appsync_region: 'ap-southeast-1',
    aws_appsync_authenticationType: 'API_KEY',
    aws_appsync_apiKey: 'da2-jq3it7ho6zbknfh7bfbzoikw3a',
    aws_cognito_identity_pool_id:
      'ap-southeast-1:c5e711ad-f4e0-4988-a186-3eb9771fc33b',
    aws_cognito_region: 'ap-southeast-1',
    aws_user_pools_id: 'ap-southeast-1_4bPbI7VBq',
    aws_user_pools_web_client_id: '7u7n7ao8s1i461asi5krsjuepd',
    aws_cognito_username_attributes: ['EMAIL'],
    aws_cognito_social_providers: [],
    aws_cognito_signup_attributes: ['NAME'],
    aws_cognito_mfa_configuration: 'OPTIONAL',
    aws_cognito_mfa_types: ['SMS', 'TOTP'],
    aws_cognito_password_protection_settings: {
      passwordPolicyMinLength: 8,
      passwordPolicyCharacters: [
        'REQUIRES_LOWERCASE',
        'REQUIRES_NUMBERS',
        'REQUIRES_SYMBOLS',
        'REQUIRES_UPPERCASE',
      ],
    },
    aws_cognito_verification_mechanisms: ['EMAIL'],
    federationTarget: 'COGNITO_USER_POOLS',
    aws_cloud_logic_custom: [
      {
        name: 'nozifyAPI',
        endpoint:
          'https://f645ehrlz2.execute-api.ap-southeast-1.amazonaws.com/dev',
        region: 'ap-southeast-1',
      },
    ],
    aws_mobile_analytics_app_id: '250b97b628604ca5a333a47639edfd47',
    aws_mobile_analytics_app_region: 'ap-southeast-1',
    aws_user_files_s3_bucket: 'nozify-bucket140408-dev',
    aws_user_files_s3_bucket_region: 'ap-southeast-1',
  },
  redirectSignInApp: 'nozify://',
  redirectSignOutApp: 'nozify://',
  redirectSignInWeb: 'http://localhost:8080/',
  redirectSignOutWeb: 'http://localhost:8080/',
  env: {
    LOG_LEVEL: 'debug',
  },
  sentryApp: {
    dns: 'https://0ecf7374a0204acdb9f4e5bb5e63c6d9@o1107033.ingest.sentry.io/6474279',
  },
  sentryWeb: {
    dns: 'https://a04e87de3a5e481ba6a1c1855778aace@o1107033.ingest.sentry.io/6474283',
  },
};
