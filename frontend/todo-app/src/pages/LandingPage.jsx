import { Link, Outlet, useLocation } from "react-router-dom";
import LandingImage from "../assets/landingImage.svg";

const LandingPage = () => {
  const location = useLocation();

  // Determine active state based on location
  const isSignupPage = location.pathname === "/signup";

  return (
    <>
      <div className="h-screen flex w-full">
        <div className="w-1/2 h-screen flex justify-center items-center ">
          <div>
            <img
              src={LandingImage}
              alt="landing image"
              className="max-h-100 max-w-100"
            />
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="flex flex-col">
            <div className="text-lg mb-2 flex justify-around rounded-md items-center border-1 p-2">
              <Link
                to="/"
                className={`${
                  isSignupPage
                    ? "bg-white text-black w-1/2 text-center p-2 rounded-md"
                    : "bg-blue-500 text-white w-1/2 text-center p-2 rounded-md"
                }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`${
                  !isSignupPage
                    ? "bg-white text-black w-1/2 text-center p-2 rounded-md"
                    : "bg-blue-500 text-white w-1/2 text-center p-2 rounded-md"
                }`}
              >
                Signup
              </Link>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
