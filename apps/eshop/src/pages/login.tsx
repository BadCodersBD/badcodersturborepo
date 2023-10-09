import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormWrapper } from "../components/elements/InputElements/FormWrapper";
import Head from "next/head";
import Header from "@/components/ui/features/Header/Header";
import Footer from "@/components/ui/features/footer/Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import metaData from "../../public/meta.json";
import { Input } from "antd";
import Cookies from 'universal-cookie';


const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [emailInput, setemailInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const cookies = new Cookies();

  const handleData = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (name === "email") setemailInput(value);
    if (name === "password") setpasswordInput(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
  
    const jsonData = JSON.stringify({
      email: data?.email,
      password: data?.password,
    });
  
    try {
      const response = await fetch(
        "https://carrentalserver.vercel.app/api/users/login",
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
        cookies.set('userData', responseData);
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
        <title>Beach Limo::Login</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content={metaData.type} />
        <meta property="og:image" content={metaData.image} />
        <meta name="google-site-verification" content="K81iN0RCpi5NOoiQmvPbDGfFInM19PeDj0yrYEM3P-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="py-20 min-h-screen px-10">
        <Link href="/">
          <div className=" border text-black border-green-700 w-40 h-auto mt-5 p-3 hover:bg-lime-600 hover:text-white hover:transition rounded-md">
            <ArrowBackIcon />
            Back to Home
          </div>
        </Link>
        <FormWrapper>
          <form
            action="# "
            onSubmit={handleSubmit}
            className="flex flex-col space-y-2 px-2 md:space-y-2 lg:space-y-2"
          >
            <Input
              value={emailInput}
              placeholder="enter your name"
              className="w-full py-2 px-4 rounded-lg"
              type="email"
              title="email"
              name="email"
              autoComplete=""
              required
              onChange={handleData}
            />
            <Input
            autoComplete=""
              value={passwordInput}
              type="password"
              title="password"
              name="password"
              required
              className="w-full py-2 px-4 rounded-lg"
              placeholder="enter your password"
              onChange={handleData}
            />

            <button
              type="submit"
              className=" p-3 rounded-md hover:bg-lime-500 bg-emerald-600"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? "Logging..." : "Login"}
            </button>
          </form>
          <div className="px-2 text-sm">
            <p className="pt-5 text-center text-sm font-light text-white">
              Do not have an account?
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/register");
                }}
                className="dark:text-primary-500 ml-1 font-medium text-green-500 hover:text-green-700 hover:underline"
              >
                SignUp here
              </Link>
            </p>
            <p className="pt-5 text-center text-sm font-light text-white">
              Are you a
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/adminLogin");
                }}
                className="dark:text-primary-500 mx-1 font-medium text-green-500 hover:text-green-700 hover:underline"
              >
                admin
              </Link>
              ?
            </p>
            <button
              type="submit"
              className="text-green-500 cursor-pointer hover:text-green-700 hover:underline"
              onClick={(e) => {
                {
                  e.preventDefault();
                  router.push("forget-password");
                }
              }}
            >
              Forgotten password?
            </button>
          </div>
        </FormWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
