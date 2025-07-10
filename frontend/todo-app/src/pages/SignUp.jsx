import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const location = useLocation();

  // Determine if we're on login or signup page
  const isSignupPage = location.pathname === "/signup";
  const toggleColor = isSignupPage ? "bg-purple-500" : "bg-blue-500";

  const handleLogin = () => {};

  return (
    <>
      <div className="border-1 p-3 rounded-md min-w-[23vw] min-h-[40vh]">
        <form action="" className="flex flex-col gap-2 pt-7">
          <input
            type="text"
            placeholder="User Name"
            className="border-1 text-lg p-1 px-2 w-[90%] m-auto rounded-md outline-none my-2"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            className="border-1 text-lg p-1 px-2 w-[90%] m-auto rounded-md outline-none my-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="border-1 text-lg p-1 px-2 w-[90%] m-auto rounded-md outline-none my-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className={`${toggleColor} w-2/3 m-auto p-1 text-lg rounded-md text-white cursor-pointer my-2`}
            onClick={handleLogin}
          >
            SignUp
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
