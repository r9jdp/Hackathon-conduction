import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#09090b] text-white">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-red-500 animate-pulse">404</h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <a
          href="/Individual/Dashboard"
          className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-200"
        >
          <Home className="m-1" size={20} />
          Return Home
        </a>
      </div>
    </div>
  );
}
