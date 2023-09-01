import TermsConditions from "../components/elements/InputElements/TermsConditions";
import { useRegister } from "../utils/Registration/useRegister";
import { SocialSignIn } from "../components/elements/InputElements/SocialSignIn";
// import { AssociateCompanyLogo } from "ui/components/elements/AssociatedCompanyLogo/AssociatedCompanyLogo";
import { Email } from "../components/elements/InputElements/Email";
import { Password } from "../components/elements/InputElements/Password";
import { ConfirmPassword } from "../components/elements/InputElements/ConfirmPassword";
import { Captcha } from "../components/elements/InputElements/Captcha";
import { LoginLink } from "../components/elements/InputElements/LoginLink";
import { useInputSave } from "../utils/Registration/useInputSave";
import { FormWrapper } from "../components/elements/InputElements/FormWrapper";
import Head from "next/head";
import Header from "@/components/ui/features/Header/Header";
import Footer from "@/components/ui/features/footer/Footer";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Input, Space } from 'antd';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    submitting,
    registerError,
    captchaRef,
    registerUserData,
    onSubmit,
  } = useRegister();

  const { localData, handleChange } = useInputSave();

  return (
    <div className="bg-white">
      <Head>
        <title>E-Trip::Regester</title>
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
        className="flex flex-col space-y-1 px-1 md:space-y-1 lg:space-y-1"
        action="# "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="pb-1">
          <label htmlFor="name" className="registerLabel">
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            className="registerTextInput"
            style={{
              outline: errors.name ? "0.125rem solid rgb(220, 38, 38)" : "",
            }}
            placeholder="name"
            defaultValue={localData?.name}
            {...register("name", { required: "Name is required" })}
            onChange={(e) => handleChange(e)}
          />
          {errors.name && (
            <span className="text-xs text-red-600">{errors.name.message}</span>
          )}
        </div>
        <Email register={register} errors={errors} />
        <Password
          register={register}
          errors={errors}
          label="Password"
          placeholder="enter your password"
        />
        <ConfirmPassword
          register={register}
          errors={errors}
          label="Confirm password"
          placeholder="confirm your password"
        />
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <Input
              id="policy"
              type="checkbox"
              style={{
                outline: errors.policy ? "0.125rem solid rgb(220, 38, 38)" : "",
              }}
              {...register("policy", { required: true })}
              className="registerCheckbox"
            />
          </div>
          <TermsConditions />
        </div>
        {errors.policy && (
          <span className="text-xs text-white">
            Please accept the terms and conditions
          </span>
        )}
        <div className="flex items-center justify-center">
          {/* <Captcha captchaRef={captchaRef} /> */}
        </div>
        {registerError && (
          <span className="text-xs text-red-600">{registerError}</span>
        )}
        {registerUserData && registerUserData !== 200 && (
          <span className="text-xs text-red-600">
            {registerUserData === 401 && (
              <LoginLink title="Email or Phone already exists!" />
            )}
          </span>
        )}
        {registerUserData === 200 ? (
          <h3 className="text-center text-2xl text-blue-400">
            Customer registered successfully!
          </h3>
        ) : (
          <div className="px-8 bg-cyan-700 hover:bg-cyan-500 py-3 rounded-md text-center">
            <button
              type="submit"
              className="registerButton"
              disabled={submitting}
            >
              {submitting ? "Registering..." : "Register"}
            </button>
          </div>
        )}
      </form>
      <div className="px-1">
        <SocialSignIn />
        <LoginLink title="Already have an account?" />
      </div>
    </FormWrapper>
    </div>
    <Footer />
    </div>
  );
};

export default RegisterForm;
