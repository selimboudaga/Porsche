"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Link} from "react-router-dom";
import Loader from "../ui/Loader";
import UseRegistration from "@/utils/UseRegistration";



const SignUpForm = () => {
   const {
    handleSubmit,
    setFirstname,
    setLastname,
    setEmail,
    setPassword1,
    setPassword2,
    error,
    loading,
  } = UseRegistration();
  

  return (
    <div className="shadow-input  ml-[220px] w-full max-w-[650px] rounded-none  p-4 md:rounded-2xl md:p-8">
      <h2 className="text-5xl font-bold text-[#DAE2E9]">Create an Account</h2>
      <p className="mt-3 max-w-md text-md text-[#AFB6BA]">
        The 911 needs no introduction—just a twist of the key.
      </p>

      <form className="my-8 mt-12" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" onChange={(e) => setFirstname(e.target.value)} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" onChange={(e) => setLastname(e.target.value)} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" onChange={(e) => setEmail(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••••" type="password" onChange={(e) => setPassword1(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password2">Confirm Password</Label>
          <Input id="password2" placeholder="••••••••••" type="password" onChange={(e) => setPassword2(e.target.value)} />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-[48px] w-full rounded-md bg-gradient-to-br from-black to-neutral-600 text-lg
           font-medium text-[#DAE2E9] shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={loading}
        >
          { loading ?  (<Loader type={1} size={23} />) : "Sign up " }
          
          { !loading && <BottomGradient />}
        </button>
        <h1 className="text-[#DAE2E9] mt-1 ml-1">
          Already have an account?{" "}
          <span className=" hover:text-[#bb251a] duration-200 ease-in transition-colors">
            <Link to="/signin">Sign in</Link>{" "}
          </span>{" "}
        </h1>
        <h1 className=" ml-1 text-[#bb251a]  font-semibold text-lg">{error}</h1>
        {/* <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" /> */}
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-[2px] w-full bg-gradient-to-r from-transparent via-[#b41b00] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#DAE2E9] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-75" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
export default SignUpForm;
