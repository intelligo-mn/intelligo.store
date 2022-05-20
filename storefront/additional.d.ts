import 'little-state-machine';

declare module 'little-state-machine' {
  interface GlobalState {
    step: 'Email' | 'Token' | 'Password';
    email: string;
    token: string;
    password: string;
  }
}
