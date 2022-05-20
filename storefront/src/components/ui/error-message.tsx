import { useTranslation } from 'next-i18next';
interface ErrorProps {
  message?: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => {
  const { t } = useTranslation('common');
  return (
    <p className="mt-2 text-xs text-red-500 ltr:text-left rtl:text-right">
      {t(message!)}
    </p>
  );
};

const ErrorMessage: React.FC<ErrorProps> = ({ message }) => {
  const { t } = useTranslation('common');
  return (
    <p className="max-w-sm p-5 mx-auto mt-16 text-lg font-semibold text-center bg-red-400 rounded min-w-min text-light">
      {t(message!)}
    </p>
  );
};

export default ErrorMessage;
