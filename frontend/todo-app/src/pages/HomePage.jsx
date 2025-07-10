import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import axiosInstance from "../utils/axiosInstance";

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
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="bg-gray-200">
        <NavBar logout={logout} />
      </div>
    </>
  );
};

export default HomePage;
