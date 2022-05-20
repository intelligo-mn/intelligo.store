const ValidationError = ({ message }: { message: string | undefined }) => {
  if (message) {
    return <p className="my-2 text-xs text-start text-red-500">{message}</p>;
  }
  return null;
};

export default ValidationError;
