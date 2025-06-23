"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import Loader from "../ui/Loader";

type SignInFormProps = {
  loading: boolean;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  email: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  error : string
  pwderror : string
  pwdloading : boolean
  handleForgotPassword: (email: string) => Promise<void>; 
};

const SignInForm = (props: SignInFormProps) => {

  return (
    <div className="shadow-input  ml-[220px] w-full max-w-[650px] rounded-none  p-4 md:rounded-2xl md:p-8">
      <h2 className="text-5xl font-bold text-[#DAE2E9]">Sign in</h2>
      <p className="mt-3 max-w-md text-md text-[#AFB6BA]">
        start your engines-SIGN IN and Proceed with exhilaration
      </p>

      <form className="my-8 mt-12" onSubmit={props.handleLogin}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" onChange={(e) => props.setEmail(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••••" type="password" onChange={(e) => props.setPassword(e.target.value)} />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-[48px] w-full rounded-md bg-gradient-to-br from-black to-neutral-600 text-lg
           font-medium text-[#DAE2E9] shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          
         {props.loading ?  (<Loader type={1} size={23}/>) : "Sign in " }
         {!props.loading && <BottomGradient />}
        </button>
        <div className=" flex w-full justify-between">
          <h1 className="text-[#DAE2E9] mt-2 ml-1">
          Dont have an account?{" "}
          <span className=" hover:text-[#bb251a] duration-200 ease-in transition-colors">
            <Link to="/signup">Sign up</Link>{" "}
          </span>{" "}
        </h1>
        <button disabled={props.pwdloading} type="button" onClick={() => props.handleForgotPassword(props.email)}  className="text-[#DAE2E9] mt-2  mr-1 hover:text-[#bb251a] duration-200 ease-in transition-colors">
          {props.pwdloading ?  (<Loader type={2} size={5}/>) : "Forgot Password" }
        </button>
        
        </div>
        
        <h1 className=" ml-1 text-[#bb251a]  font-semibold text-lg">{props.error || props.pwderror}</h1>
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
export default SignInForm;
