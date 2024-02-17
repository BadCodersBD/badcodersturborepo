"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { Checkbox } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import TextInput from "../../elements/input/index";
import { handleChangeRegisterInput } from "../../../modules/auth/_redux/actions/auth-action";
import { useSignup } from "../../../modules/auth/hocs/signup/useSignup";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserSignUp = () => {
  const {
    isInvalid,
    email,
    signUpError,
    isVisible,
    password,
    phone,
    firstname,
    lastname,
    username,
    toggleVisibility,
    handleSignUp,
    isInvalidPassword,
    isInvalidusername,
    isInvalidfirstName,
    isInvalidLastName,
    isInvalidPhone,
    handleSignUpwithgoogle,
    handleSignUpwithMicrosoft,
    isSubmitting,
    isSignup,
  } = useSignup();

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
    <div className="w-full">
      <div className=" mt-5 px-20 underline ">
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
              style={{ width: "200px", height: "100px", objectFit: "contain" }}
            />
            <h1 className=" text-2xl font-medium text-black ">Demo Login</h1>
          </div>

          <h1>
            {`have an account?`}
            <span className="pl-1">
              <Link className="font-semibold hover:underline" href="/login">
                Log In
              </Link>
            </span>
          </h1>
          <form className="h-full w-full ">
            {/* <TextInput
              type="text"
              isInvalid={isInvalidusername}
              color={isInvalidusername ? "danger" : "default"}
              errorMessage={"Enter your Your Username"}
              name="username"
              variant="underlined"
              label="User Name"
              value={username}
              size="lg"
              handleChange={handleChangeRegisterInput}
            /> */}
            <TextInput
              type="text"
              isInvalid={isInvalidfirstName}
              color={isInvalidfirstName ? "danger" : "default"}
              errorMessage={"Enter your Name"}
              name="firstname"
              variant="underlined"
              label="Name"
              value={firstname}
              size="lg"
              handleChange={handleChangeRegisterInput}
            />
            {/* <TextInput
              type="text"
              isInvalid={isInvalidLastName}
              color={isInvalidLastName ? "danger" : "default"}
              errorMessage={"Enter your Last Name"}
              name="lastname"
              variant="underlined"
              label="Last Name"
              value={lastname}
              size="lg"
              handleChange={handleChangeRegisterInput}
            />
            <TextInput
              type="text"
              isInvalid={isInvalidPhone}
              color={isInvalidPhone ? "danger" : "default"}
              errorMessage={"Enter your Phone Number"}
              name="phone"
              variant="underlined"
              label="Phone Number"
              value={phone}
              size="lg"
              handleChange={handleChangeRegisterInput}
            /> */}
            <TextInput
              type="email"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "default"}
              errorMessage={"Please enter a valid email"}
              name="email"
              variant="underlined"
              label="Email address"
              value={email}
              size="lg"
              handleChange={handleChangeRegisterInput}
            />
            <TextInput
              type={isInvalidPassword ? "text" : "password"}
              label="Password"
              color={isInvalidPassword ? "danger" : "default"}
              isInvalid={isInvalidPassword}
              errorMessage="Please enter valid Password"
              name="password"
              variant="underlined"
              value={password}
              handleChange={handleChangeRegisterInput}
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
          {signUpError && <p className="text-red-500">{signUpError}</p>}
          <Button
            size="lg"
            onClick={handleSignUp}
            className={`w-full rounded-md font-semibold ${
              !isInvalid &&
              !isInvalidPassword &&
              email !== "" &&
              password !== ""
                ? "bg-[#3f2de2] text-white"
                : "cursor-not-allowed"
            }`}
            disabled={
              isSignup ||
              isInvalid ||
              isInvalidPassword ||
              email == "" ||
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
            {isSignup ? <Spinner size="md" /> : "Create Account"}
          </Button>
          {/* <Link className="flex w-full hover:underline" href="/forget-password">
              Forgot My Password
            </Link> */}
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

export default UserSignUp;
