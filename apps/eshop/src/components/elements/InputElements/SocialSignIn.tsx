import { GenericButton } from "ui/components/elements/Buttons/Button";
import { signIn } from "next-auth/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const handleSignUp = () => {
  signIn();
};

export const SocialSignIn = () => {
  return (
    <>
      <div className="my-2 flex items-center text-sm font-light text-black">
        <div className="h-0.5 w-full bg-black"></div>
        <p className="p-1 text-[14px]">Or</p>
        <div className="h-0.5 w-full bg-black"></div>
      </div>
      <div className="flex w-full items-center justify-center gap-1 text-white">
        <div onClick={handleSignUp} className="w-full">
          <button className="w-full rounded-md bg-blue-600 p-2">
            <div className="flex flex-row items-center justify-center">
              <span className="mr-1">
                <GoogleIcon fontSize="small" />
              </span>
              <span className="text-xs">LogIn With Google</span>
            </div>
          </button>
        </div>
        <div onClick={handleSignUp} className="w-full">
          <button className="w-full rounded-md bg-blue-600 p-2">
            <div className="flex w-full flex-row items-center justify-center">
              <span className="mr-1">
                <FacebookIcon fontSize="small" />
              </span>
              <span className="text-xs">LogIn with Facebook</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
