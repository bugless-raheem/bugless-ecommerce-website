import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl">
            Shophub
          </Link>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/">Home</Link>
            <Link to="/checkout">Checkout</Link>
          </div>

          {/* Auth buttons */}
          {!user ? (
            <div className="flex gap-3">
              <Link
                to="/auth"
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 text-sm"
              >
                Login
              </Link>

              <Link
                to="/auth"
                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 text-sm"
              >
                Signup
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs sm:text-sm text-blue-700">
                Hello, {user.email}
              </span>
              <div
                onClick={logout}
                className="px-4 py-2 cursor-pointer bg-gray-700 text-white rounded-md hover:bg-gray-600 text-sm"
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
