import { Link } from "react-router-dom";

const ProfileSection = ({ logout }) => {
  return (
    <>
      <div className="mx-5 min-h-[8vh] min-w-[10vw] flex justify-center items-center gap-2">
        <p className="rounded-full h-[7vh] w-1/2 flex justify-center items-center bg-black">
          U
        </p>
        <p>
          <span className="font-semibold">@User</span>
          <span>
            <button onClick={logout} className="text-center cursor-pointer">
              Logout
            </button>
          </span>
        </p>
      </div>
    </>
  );
};

export default ProfileSection;
