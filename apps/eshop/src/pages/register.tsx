import { LoginLink } from "@/components/elements/InputElements/LoginLink";
import { FormWrapper } from "@/components/elements/InputElements/FormWrapper";
import Head from "next/head";
import Header from "@/components/ui/features/Header/Header";
import Footer from "@/components/ui/features/footer/Footer";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import metaData from "../../public/meta.json";
import { Input } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Cookies from "universal-cookie";
import SimpleBottomNavigation from "@/components/ui/features/BottomNavigation/BottomNavigation";

const RegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [nameInput, setnameInput] = useState("");
  const [emailInput, setemailInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState(""); // Step 1: Add state for confirmPasswordInput
  const [error, setError] = useState(""); // Step 1: Add state for the error message
  const [nameError, setNameError] = useState(""); // Step 1: Add state for name error
  const [emailError, setEmailError] = useState(""); // Add state for email error
  const [passwordError, setPasswordError] = useState(""); // Add state for password error
  const [confirmPasswordError, setConfirmPasswordError] = useState(""); // Add state for confirm password error

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const cookies = new Cookies();

  const handleData = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (name === "username") setnameInput(value);
    if (name === "email") setemailInput(value);
    if (name === "password") setpasswordInput(value);
    if (name === "confirmpassword") setConfirmPasswordInput(value); // Step 2: Handle confirmPasswordInput
    // Reset errors when input changes
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let valid = true;

    if (!data.username) {
      setNameError("Name is required"); // Set name error if empty
      valid = false;
    }

    if (!data.email) {
      setEmailError("Email is required"); // Set email error if empty
      valid = false;
    }

    if (!data.password) {
      setPasswordError("Password is required"); // Set password error if empty
      valid = false;
    }

    if (!confirmPasswordInput) {
      setConfirmPasswordError("Confirm Password is required"); // Set confirm password error if empty
      valid = false;
    }
    if (passwordInput !== confirmPasswordInput) {
      setError("Passwords do not match"); // Set error message if passwords don't match
      return;
    }
    setIsLoading(true);

    const jsonData = JSON.stringify({
      username: data?.username,
      email: data?.email,
      password: data?.password,
    });

    try {
      const response = await fetch(
        "https://carrentalserver.vercel.app/api/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonData,
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData); // Add this line
        cookies.set("userData", responseData);
        router.push("/");
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <Head>
        <title>Beach Limo::Register</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content={metaData.type} />
        <meta property="og:image" content={metaData.image} />
        <meta
          name="google-site-verification"
          content="K81iN0RCpi5NOoiQmvPbDGfFInM19PeDj0yrYEM3P-8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WL5ZCCVS');
        `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="py-20 px-10">
        <Link href="/">
          <div className=" border text-black border-green-700 w-40 h-auto mt-5 p-3 hover:bg-lime-600 hover:text-white hover:transition rounded-md">
            <ArrowBackIcon />
            Back to Home
          </div>
        </Link>
        <FormWrapper>
          <h1 className="text-center text-2xl font-semibold">Create An Account</h1>
          <form
            className="flex flex-col space-y-1 px-1 md:space-y-1 lg:space-y-1"
            action="#"
            onSubmit={handleSubmit}
          >
            <div className="pb-1">
              <label>Name:</label>
              <Input
                type="text"
                placeholder="Enter Your Name"
                id="name"
                name="username"
                value={nameInput}
                onChange={handleData}
              />
              {nameError && (
                <span className="text-red-600 text-sm">{nameError}</span> // Render name error conditionally
              )}
            </div>
            <div className="pb-1">
              <label>Email:</label>
              <Input
                type="email"
                title="email"
                name="email"
                placeholder="Enter Your Email"
                value={emailInput}
                onChange={handleData}
              />
              {emailError && (
                <span className="text-red-600 text-sm">{emailError}</span> // Render email error conditionally
              )}
            </div>
            <div className="pb-1">
              <label>Password:</label>
              <Input
                type="password"
                title="password"
                name="password"
                value={passwordInput}
                required
                placeholder="enter your password"
                onChange={handleData}
              />
              {passwordError && (
                <span className="text-red-600 text-sm">{passwordError}</span> // Render password error conditionally
              )}
            </div>
            <div className="pb-2">
              <label>Confirm Password:</label>
              <Input
                type="password"
                title="Confirm Password"
                name="confirmpassword"
                value={confirmPasswordInput}
                required
                placeholder="Confirm Password"
                onChange={handleData}
              />
              {confirmPasswordError && (
                <span className="text-red-600 text-sm">
                  {confirmPasswordError}
                </span> // Render confirm password error conditionally
              )}
              {error && (
                <span className="text-red-600 text-sm">{error}</span> // Render error message conditionally
              )}
            </div>
            <div className="flex justify-center items-center w-full">
              <button
                type="submit"
                className="registerButton px-8 w-full bg-cyan-700 hover:bg-cyan-500 py-3 rounded-md text-center"
                disabled={isLoading}
                onClick={handleSubmit}
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
          <div className="px-1">
            {/* <SocialSignIn /> */}
            <LoginLink title="Already have an account?" />
          </div>
        </FormWrapper>
      </div>
      <Footer />
      <div className="inline md:hidden">
        <SimpleBottomNavigation />
      </div>
    </div>
  );
};

export default RegisterForm;
