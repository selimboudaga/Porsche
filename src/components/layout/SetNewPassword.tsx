import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Loader from "../ui/Loader";
import UseSetNewPassword from "@/utils/UseSetNewPassword";
const SetNewPassword = ({ email }: { email: string }) => {
  const { otp, setOtp, setNewPassword, error, loading, handleSetNewPassword } =
    UseSetNewPassword();
  return (
    <div className=" w-full flex flex-col">
      <div className=" mx-auto ">
        <h2 className="text-5xl font-bold text-[#DAE2E9]">Change your password</h2>
        <p className="mt-3   text-lg text-[#AFB6BA]">
          We have sent a verification code to{" "}
          <span className=" font-semibold text-[#DAE2E9]">{email}</span>.
        </p>
        <p className="  text-wrap text-lg text-[#AFB6BA]">
          Please check your inbox and input the code below.
        </p>
        <div className=" mt-8">
          <form onSubmit={handleSetNewPassword}>
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              value={otp}
              onChange={(otp) => setOtp(otp)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <LabelInputContainer className="mb-4 mt-8">
          <Label className="mb-2 text-3xl" htmlFor="password">New Password</Label>
          <Input id="password" placeholder="••••••••••" type="password" onChange={(e) => setNewPassword(e.target.value)} />
        </LabelInputContainer>
            <button
              className="group/btn mt-8 relative block h-[48px] w-full rounded-md bg-gradient-to-br from-black to-neutral-600 text-lg
           font-medium text-[#DAE2E9] shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
              disabled={loading}
            >
              {loading ? <Loader type={1} size={23} /> : "Set New Password "}

              {!loading && <BottomGradient />}
              <BottomGradient />
            </button>
            <h1 className=" ml-1 text-[#bb251a]  font-semibold text-lg">
              {error}
            </h1>
          </form>
        </div>
      </div>
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
export default SetNewPassword;
