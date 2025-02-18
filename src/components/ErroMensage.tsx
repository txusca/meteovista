type ErroMessageProps = {
  errorMessage: string;
};

export default function ErroMessage({ errorMessage }: ErroMessageProps) {
  return (
    <div className="mt-4">
      <h1 className="text-white text-2xl">{errorMessage}</h1>
    </div>
  );
}
