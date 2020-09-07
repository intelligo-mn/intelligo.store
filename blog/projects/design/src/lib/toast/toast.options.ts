export interface ToastOptions {
  text: string;
  type: ToastType;
  duration: number;
}

export enum ToastType {
  'SUCCESS' = 'success',
  'ERROR' = 'error',
  'DEFAULT' = 'default',
}
