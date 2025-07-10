import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <>
      <div className="border-1 p-3 rounded-md min-w-[23vw] min-h-[40vh]">
        <form action="" className="flex flex-col gap-2 pt-7">
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
            className="bg-purple-500 w-2/3 m-auto p-1 text-lg rounded-md text-white cursor-pointer my-2"
            onClick={handleLogin}
          >
            Login
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
