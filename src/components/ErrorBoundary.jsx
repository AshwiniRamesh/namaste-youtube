import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();
  console.error("ErrorBoundary caught an error:", error);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600">Oops! Something went wrong.</h1>
      <p className="text-gray-700">{error.statusText || error.message}</p>
      <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Go Back Home
      </a>
    </div>
  );
}
