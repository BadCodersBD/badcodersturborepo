import { useForgetPassword } from "../utils/Registration/useForgetPassword";
import { Email } from "../components/elements/InputElements/Email";
import { AssociateCompanyLogo } from "ui/components/elements/AssociatedCompanyLogo/AssociatedCompanyLogo";
import { Captcha } from "../components/elements/InputElements/Captcha";
import { LoginLink } from "../components/elements/InputElements/LoginLink";
import { FormWrapper } from "../components/elements/InputElements/FormWrapper";

const ForgetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    submitting,
    forgetPasswordError,
    captchaRef,
    onSubmit,
    sentOtpData,
  } = useForgetPassword();

  return (
    <FormWrapper>
      <form
        className="space-y-1 px-2 md:space-y-2"
        action="# "
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-sm text-black">
          Enter the email address associated with your account <br /> and we
          will send you an OTP to reset password.
        </p>
        <Email register={register} errors={errors} />
        <Captcha captchaRef={captchaRef} />
        {forgetPasswordError && (
          <span className="text-xs text-red-600">{forgetPasswordError}</span>
        )}
        {sentOtpData && (
          <div className="text-xs text-red-600">{sentOtpData.message}</div>
        )}
        <button type="submit" className="registerButton" disabled={submitting}>
          {submitting ? "Sending..." : "Send OTP"}
        </button>
      </form>
      <div className="px-10 text-sm text-black">
        <LoginLink title="Back to" />
        <AssociateCompanyLogo />
      </div>
    </FormWrapper>
  );
};

export default ForgetPasswordForm;
