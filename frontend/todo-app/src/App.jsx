import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
