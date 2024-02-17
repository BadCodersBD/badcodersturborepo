"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { Checkbox } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import TextInput from "../../../components/elements/input";
import { useLogin } from "../../../modules/auth/hocs/login/useLogin";
import { handleChangeLogInput } from "../../../modules/auth/_redux/actions/login-auth-actions";
import { useSession } from "next-auth/react";

const UserLogin = () => {
  const {
    isInvalid,
    emailorphone,
    loginError,
    isVisible,
    password,
    toggleVisibility,
    handleLogin,
    isInvalidPassword,
    handleSignUpwithgoogle,
    handleSignUpwithMicrosoft,
    isSubmitting,
    isLogin,
  } = useLogin();

  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session?.user) {
      // @ts-expect-error type error is not solved
      if (session?.user?.role === "Customer") {
        router.replace("/userdashboard");
        // @ts-expect-error type error is not solved
      } else if (session?.user?.role === "Admin") {
        router.replace("/admindashboard");
        // @ts-expect-error type error is not solved
      } else if (session?.user?.role === "Service-man") {
        router.replace("/servicemandashboard");
      }
    }
  }, [status, session, router]);

  console.log(session)

  return (
    <div className=" w-full dark:bg-slate-900 dark:text-white bg-white text-black min-h-screen">
      <div className=" pt-5 px-20 underline ">
        <Link href="/">Go Back</Link>
      </div>
      <div className=" flex items-center justify-center pb-20">
        <div className="flex flex-col items-center  justify-center gap-4 p-4 text-center sm:min-w-max md:p-0">
          <div>
            <Image
              src="/logo.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              priority={true}
              style={{ width: "200px", height: "100px", objectFit: "contain" }}
            />
            <h1 className=" text-2xl font-medium text-white ">Demo Register</h1>
          </div>
          <h1>
            {`Don't have account?`}
            <span className="pl-1">
              <Link className="font-semibold hover:underline" href="/register">
                Register
              </Link>
            </span>
          </h1>
          <form className="h-full w-full ">
            <TextInput
              type="text"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "default"}
              errorMessage={"Please enter email or Phone"}
              name="emailorphone"
              variant="underlined"
              label="Email Or Phone"
              value={emailorphone}
              size="lg"
              handleChange={handleChangeLogInput}
            />
            <TextInput
              type={isVisible ? "text" : "password"}
              label="Password"
              color={isInvalidPassword ? "danger" : "default"}
              isInvalid={isInvalidPassword}
              errorMessage="Please enter valid Password"
              name="password"
              variant="underlined"
              value={password}
              handleChange={handleChangeLogInput}
              size="lg"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FaEye className="pointer-events-none text-2xl text-default-400" />
                  ) : (
                    <FaEyeSlash className="pointer-events-none text-2xl text-default-400" />
                  )}
                </button>
              }
            />
          </form>
          <div className="flex w-full">
            <Checkbox>Remember Me</Checkbox>
          </div>
          {loginError && <p className="text-red-500">{loginError}</p>}
          <Button
            size="lg"
            onClick={handleLogin}
            className={`w-full rounded-md font-semibold ${
              !isInvalid &&
              !isInvalidPassword &&
              emailorphone !== "" &&
              password !== ""
                ? "bg-[#21865c] text-white"
                : "cursor-not-allowed"
            }`}
            disabled={
              isLogin ||
              isInvalid ||
              isInvalidPassword ||
              emailorphone == "" ||
              password == "" ||
              isSubmitting
            }
            endContent={
              isSubmitting ? (
                <Spinner color="warning" size="sm" />
              ) : (
                <IoIosArrowForward />
              )
            }
          >
            {isLogin ? <Spinner size="md" /> : "Log In"}
          </Button>
          <Link className="flex w-full hover:underline" href="/forget-password">
            Forgot My Password
          </Link>
          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <button
              title="Sign Up"
              type="button"
              onClick={handleSignUpwithgoogle}
              className="grid w-full cursor-pointer grid-cols-7 whitespace-nowrap rounded-md bg-[#4285F4] px-3 py-2 font-medium text-white"
            >
              <Image
                src="/assets/auth/google.png"
                alt="Google"
                height={24}
                width={24}
              />
              <span className="col-span-6"> Google</span>
            </button>
            <button
              title="Sign Up"
              type="button"
              onClick={handleSignUpwithMicrosoft}
              className="grid w-full cursor-pointer grid-cols-7 whitespace-nowrap rounded-md bg-[#2F2F2F] px-3 py-2 font-medium text-white"
            >
              <Image
                src="/assets/auth/github.png"
                alt="Github"
                height={24}
                width={24}
              />
              <span className="col-span-6">Github</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
