import { ScanLine } from "lucide-react";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { signup, user, logout, login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signup(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
    console.log(result);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center">
      <div className=" max-w-7xl w-72 bg-white p-4 shadow-md">
        <div className="">
          {user && <p className="text-sm">User logged in: {user.email} </p>}
          <button onClick={() => logout()} className="bg-red-200">
            logout
          </button>
          <h1 className="text-2xl font-semibold mb-8 text-gray-800">
            {mode === "signup" ? "Sign up" : "Login"}
          </h1>
        </div>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 "
        >
          {error && (
            <div className="bg-red-100 text-red-800 border border-red-200 p-3 rounded mb-4">
              {error}
            </div>
          )}
          <div className="block space-y-2">
            <label htmlFor="email" className="text-sm text-gray-700 block">
              Email
            </label>
            <div className="relative w-full">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                id="email"
                type="text"
                className="w-full p-1 border border-gray-300 rounded text-sm transition-colors duration-200 focus:outline-none focus:border-blue-500"
              ></input>

              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
              >
                <ScanLine size={18} />
              </button>
            </div>
            {errors.email && (
              <span className="text-sm text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="block space-y-2">
            <label htmlFor="password" className="text-sm text-gray-700 block">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",

                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Password must be less than 12 characters",
                },
              })}
              id="password"
              type="password"
              className="w-full p-1 border border-gray-300 rounded text-sm transition-colors duration-200 focus:outline-none focus:border-blue-500"
            ></input>
            {errors.password && (
              <span className="text-sm text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <button className="cursor-pointer px-4 py-2 bg-blue-700 text-white  hover:bg-blue-600 text-sm">
              {mode === "signup" ? "Sign up" : "Login"}
            </button>
          </div>
          <div className="text-center text-sm">
            {mode === "signup" ? (
              <p>
                Already have an acount?{" "}
                <span>
                  <Link
                    onClick={() => setMode("login")}
                    className="text-[#007bff] no-underline hover:underline"
                  >
                    Login
                  </Link>
                </span>
              </p>
            ) : (
              <p>
                Don't have an acount?{" "}
                <span>
                  <Link
                    onClick={() => setMode("signup")}
                    className="text-[#007bff] no-underline hover:underline"
                  >
                    Sign up
                  </Link>
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
