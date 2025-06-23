import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div className=" z-50 fixed flex w-full">
      <div className=" w-full items-center  flex pt-9">
        {user ? (
          <>
            <div className=" flex w-full justify-end">
              <button
                onClick={logout}
                className=" text-xl mr-6 font-normal p-2 px-3 hover:text-[#0f0f0f] hover:bg-[#DAE2E9] transition-colors ease-in-out duration-300 border-[1px] border-[#DAE2E9] rounded-lg"
              >
                Log out
              </button>
            </div>
          </>
        ) : (
          <>
          <div className=" flex w-full justify-end">
            <Link to="/signin">
              <button className=" text-xl mr-6 font-normal p-2 px-3 hover:text-[#0f0f0f] hover:bg-[#DAE2E9] transition-colors ease-in-out duration-300 border-[1px] border-[#DAE2E9] rounded-lg">
                Sign in
              </button>
            </Link>
          </div>
            
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
