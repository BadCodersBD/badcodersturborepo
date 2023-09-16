import { useLogin } from "../utils/Registration/useLogin";
import { Email } from "../components/elements/InputElements/Email";
import { Password } from "../components/elements/InputElements/Password";
import { SocialSignIn } from "../components/elements/InputElements/SocialSignIn";
// import { AssociateCompanyLogo } from "ui/components/elements/AssociatedCompanyLogo/AssociatedCompanyLogo";
import { Captcha } from "../components/elements/InputElements/Captcha";
import { useRecoilState } from "recoil";
// import { modalOpenState } from "ui/components/elements/LoginRegistrationModal/ModalOpen";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormWrapper } from "../components/elements/InputElements/FormWrapper";
import Head from "next/head";
import Header from "@/components/ui/features/Header/Header";
import Footer from "@/components/ui/features/footer/Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Input, Space } from "antd";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    submitting,
    loginError,
    captchaRef,
    onSubmit,
    loggedInData,
  } = useLogin();
  // const [, setModalOpen] = useRecoilState(modalOpenState);
  const router = useRouter();

  return (
    <div className="bg-white">
      <Head>
        <title>Beach Limo::Login</title>
        <meta name="description" content="A Travell service Company" />
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
            action="# "
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 px-2 md:space-y-2 lg:space-y-2"
          >
            <Email register={register} errors={errors} />
            <Password
              register={register}
              errors={errors}
              label="Password"
              placeholder="enter your password"
            />
            {/* <Captcha captchaRef={captchaRef} /> */}
            <div className="flex justify-start">
              <div className="flex h-5 items-center pr-2">
                <Input
                  id="checked"
                  type="checkbox"
                  className="registerCheckbox"
                />
              </div>
              <div className="h-5 text-sm text-white">Remember me</div>
            </div>
            {loginError && (
              <span className="text-xs text-red-600">{loginError}</span>
            )}
            <button
              type="submit"
              className="registerButton p-3 rounded-md hover:bg-lime-500 bg-emerald-600"
              disabled={submitting}
            >
              {submitting ? "Logging..." : "Login"}
            </button>
          </form>
          <div className="px-2 text-sm">
            <SocialSignIn />
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
                  // setModalOpen({ open: false, modalName: "" });
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
