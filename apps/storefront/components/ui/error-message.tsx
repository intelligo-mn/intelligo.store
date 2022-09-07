interface Props {
  message: string;
}

const ErrorMessage = ({ message }: Props) => {
  return (
    <p className="bg-red-400 p-5 mt-16 mx-auto max-w-sm min-w-min text-center text-lg text-white font-semibold rounded">
      {message}
    </p>
  );
};

export default ErrorMessage;
