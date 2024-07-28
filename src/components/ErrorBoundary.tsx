// Fallback UI to display error message

export default function ErrorBoundary({ message }: { message: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 pt-40 text-red-600">
      <p className={"text-5xl tracking-widest"}>Error</p>
      <p className={"text-2xl"}>{message}</p>
    </div>
  );
}
