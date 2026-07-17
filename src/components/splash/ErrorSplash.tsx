interface IErrorSplashProps {
  title: string;
  message: string;
}

export function ErrorSplash(props: IErrorSplashProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">{props.title}</h1>
      <p className="mt-4 text-lg text-gray-700">{props.message}</p>
    </div>
  );
}
