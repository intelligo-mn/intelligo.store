import { useTranslation } from "next-i18next";
interface Props {
  message?: string | undefined;
}

export const Error = ({ message }: Props) => {
  const { t } = useTranslation("common");
  return <p className="my-2 text-xs text-start text-red-500">{t(message!)}</p>;
};

const ErrorMessage = ({ message }: Props) => {
  const { t } = useTranslation("common");
  return (
    <p className="bg-red-400 p-5 mt-16 mx-auto max-w-sm min-w-min text-center text-lg text-light font-semibold rounded">
      {t(message!)}
    </p>
  );
};

export default ErrorMessage;
