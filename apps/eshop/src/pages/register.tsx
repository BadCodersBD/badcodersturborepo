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

const RegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [nameInput, setnameInput] = useState("");
  const [emailInput, setemailInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleData = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (name === "username") setnameInput(value);
    if (name === "email") setemailInput(value);
    if (name === "password") setpasswordInput(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
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
          content="uF7IpXKCuelQJy81bb-K1zcDj1VXO3l366zJzWjRki8"
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
          <form
            className="flex flex-col space-y-1 px-1 md:space-y-1 lg:space-y-1"
            action="#"
            onSubmit={handleSubmit}
          >
            <div className="pb-1">
              <label htmlFor="name" className="registerLabel">
                Name
              </label>
              <Input
                type="text"
                placeholder="Enter Your Name"
                id="name"
                name="username"
                value={nameInput}
                onChange={handleData}
              />
            </div>
            <Input
              type="email"
              title="email"
              name="email"
              placeholder="Enter Your Email"
              value={emailInput}
              onChange={handleData}
            />
            <Input
              type="password"
              title="password"
              name="password"
              value={passwordInput}
              required
              placeholder="enter your password"
              onChange={handleData}
            />
            <div className="px-8 bg-cyan-700 hover:bg-cyan-500 py-3 rounded-md text-center">
              <button
                type="submit"
                className="registerButton"
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
    </div>
  );
};

export default RegisterForm;
