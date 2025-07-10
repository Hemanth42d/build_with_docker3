import React from "react";
import ProfileSection from "./ProfileSection";

const NavBar = ({ logout }) => {
  return (
    <>
      <div className="min-h-[10vh] bg-purple-500 text-white m-3 rounded-md flex justify-between items-center">
        <p className="text-2xl mx-5">ToDo app</p>
        <ProfileSection logout={logout} />
      </div>
    </>
  );
};

export default NavBar;
