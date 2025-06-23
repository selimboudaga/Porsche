import SignUpForm from "@/components/layout/SignUpForm";
import login from "../assets/videos/login.mp4";
import logo from "../assets/images/porsche_logo.png";

const Signup = () => {
  

  return (
    <div className=" w-full flex bg-[#050505] ">
      <div className=" w-[48%] flex  h-screen">
        <video
          className=" object-cover w-full  h-full"
          autoPlay
          muted
          loop
          src={login}
        />
      </div>
      <div className=" w-full h-screen flex flex-col  ">
        <div className=" w-full justify-end  flex pt-7 pr-4">
          <img className="  " width={220} src={logo} alt="" />
        </div>
        <div className=" w-full my-auto">
            <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
