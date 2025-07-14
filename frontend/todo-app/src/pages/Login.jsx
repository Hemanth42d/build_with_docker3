import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/helper";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isSignupPage = location.pathname === "/signup";
  const toggleColor = isSignupPage ? "bg-purple-500" : "bg-blue-500";

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter valid email...");
      return;
    }

    if (!password) {
      setError("Please enter valid password");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_BASE_URL}/`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.user) {
        toast.success("Login Successfull");
        navigate("/home");
      } else {
        setError("Login failed - no user data received");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Login failed";

      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="border-1 p-3 rounded-md min-w-[23vw] min-h-[40vh]">
        <form onSubmit={handleLogin} className="flex flex-col gap-2 pt-7">
          <input
            type="email"
            placeholder="email"
            className="border-1 text-lg p-1 px-2 w-[90%] m-auto rounded-md outline-none my-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <input
            type="password"
            placeholder="password"
            className="border-1 text-lg p-1 px-2 w-[90%] m-auto rounded-md outline-none my-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          <p className="text-red-500 text-center mt-1">{error}</p>
          <button
            type="submit"
            className={`${toggleColor} w-2/3 m-auto mt-3 p-1 text-lg rounded-md text-white cursor-pointer my-2`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <p className="text-lg m-auto">
            Don't have an account
            <Link to="/signup" className="text-blue-500 px-2">
              SignUp?
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
