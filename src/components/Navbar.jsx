// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="font-bold text-2xl">
//             Shophub
//           </Link>

//           {/* Links */}
//           <div className="hidden md:flex space-x-6">
//             <Link to="/">Home</Link>
//             <Link to="/checkout">cart</Link>
//           </div>

//           {/* Auth buttons */}
//           {!user ? (
//             <div className="flex gap-3">
//               <Link
//                 to="/auth"
//                 className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 text-sm"
//               >
//                 Login
//               </Link>

//               <Link
//                 to="/auth"
//                 className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 text-sm"
//               >
//                 Signup
//               </Link>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center gap-2">
//               <span className="text-xs sm:text-sm text-blue-700">
//                 Hello, {user.email}
//               </span>
//               <div
//                 onClick={logout}
//                 className="px-4 py-2 cursor-pointer bg-gray-700 text-white rounded-md hover:bg-gray-600 text-sm"
//               >
//                 Logout
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


// 


// 



import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-2xl text-gray-800 tracking-tight">
              Shophub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/checkout"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Cart
            </Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <>
                <Link
                  to="/auth"
                  className="px-6 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/auth"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-2xl transition-all active:scale-95 shadow-sm"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <div className="text-sm">
                  Hello, <span className="font-semibold text-blue-600">{user.email}</span>
                </div>
                <button
                  onClick={logout}
                  className="px-6 py-2.5 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-2xl transition-all active:scale-95"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Sliding Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-6 pt-4 px-2 bg-white">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-blue-600 py-2 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/checkout"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-blue-600 py-2 transition-colors"
            >
              Cart
            </Link>

            <div className="pt-4 border-t border-gray-200">
              {!user ? (
                <div className="flex flex-col gap-3">
                  <Link
                    to="/auth"
                    onClick={() => setIsOpen(false)}
                    className="py-4 text-center text-lg font-medium border border-gray-300 rounded-2xl text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth"
                    onClick={() => setIsOpen(false)}
                    className="py-4 text-center text-lg font-semibold bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all"
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-5 py-4">
                  <div className="text-center">
                    <p className="text-gray-500 text-sm">Signed in as</p>
                    <p className="font-semibold text-blue-600 text-lg mt-1">
                      {user.email}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="w-full py-4 bg-gray-800 text-white font-semibold rounded-2xl hover:bg-gray-900 transition-all active:scale-95"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}