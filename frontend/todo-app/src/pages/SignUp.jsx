import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/helper";
import axiosInstance from "../utils/axiosInstance";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isSignupPage = location.pathname === "/signup";
  const toggleColor = isSignupPage ? "bg-purple-500" : "bg-blue-500";

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter valid email");
      return;
    }
    if (!password) {
      setError("Please enter valid password");
      return;
    }
    if (!username) {
      setError("Please enter your name");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      let response = await axiosInstance.post("/signup", {
        email,
        password,
        name: username, // Send as 'name' to match backend
      });

      console.log(response.data);
      // Navigate on successful signup
      if (response.data.user) {
        navigate("/home");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || error.message || "Signup failed"
      );
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="border-1 p-3 rounded-md min-w-[23vw] min-h-[40vh]">
        <form onSubmit={handleSignup} className="flex flex-col gap-2 pt-7">
          <input
            type="text"
            placeholder="User Name"
            className="border-1 text-lg p-1 px-2 w-[90%] m-auto rounded-md outline-none my-2"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            disabled={isLoading}
          />
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
          <p className="text-red-500 my-2">{error}</p>
          <button
            type="submit"
            className={`${toggleColor} w-2/3 m-auto p-1 text-lg rounded-md text-white cursor-pointer my-2`}
            disabled={isLoading}
          >
            {isLoading ? "Signing Up.." : "SignUp"}
          </button>
          <p className="text-lg m-auto">
            Already have an account
            <Link to="/" className="text-blue-500 px-1">
              Login?
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
