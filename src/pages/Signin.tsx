import register from "../assets/videos/register.mp4";
import SignInForm from "@/components/layout/SignInForm";
import logo from "../assets/images/porsche_logo.png";
import UseLogin from "@/utils/UseLogin";
import UseForgotPassword from "@/utils/UseForgotPassword";
const Signin = () => {
  const {email, setEmail, setPassword, handleLogin, error, loading } = UseLogin();
  const { handleForgotPassword, pwderror, pwdloading } = UseForgotPassword();

  return (
    <div className=" w-full flex bg-[#050505] ">
      <div className=" w-[48%] flex  h-screen">
        <video
          className=" object-cover w-full  h-full"
          autoPlay
          muted
          loop
          src={register}
        />
      </div>
      <div className=" w-full h-screen flex flex-col  ">
        <div className=" w-full justify-end  flex pt-7 pr-4">
          <img className="  " width={220} src={logo} alt="" />
        </div>
        <div className=" w-full my-auto">
          <SignInForm
            handleLogin={handleLogin}
            loading={loading}
            email={email}
            setEmail={setEmail}
            setPassword={setPassword}
            error={error}
            pwderror={pwderror}
            pwdloading={pwdloading}
            handleForgotPassword={handleForgotPassword}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
