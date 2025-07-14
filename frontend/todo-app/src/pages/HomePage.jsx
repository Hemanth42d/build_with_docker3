import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import axiosInstance from "../utils/axiosInstance";
import MainPage from "./MainPage";
import { toast } from "react-toastify";

const HomePage = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_BASE_URL}/logout`,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        localStorage.removeItem("user");
        sessionStorage.clear();
        toast.success("Logout successfull");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="pb-3">
        <div className="h-[10vh]">
          <NavBar logout={logout} />
        </div>
        <div className="h-[85vh] mt-3 w-[98vw] m-auto">
          <MainPage />
        </div>
      </div>
    </>
  );
};

export default HomePage;
