import { useResetPassword } from "../utils/Registration/useResetPassword";
import { AssociateCompanyLogo } from "ui/components/elements/AssociatedCompanyLogo/AssociatedCompanyLogo";
import { Password } from "../components/elements/InputElements/Password";
import { ConfirmPassword } from "../components/elements/InputElements/ConfirmPassword";
import { LoginLink } from "../components/elements/InputElements/LoginLink";
import { OTP } from "../components/elements/InputElements/OTP";
import { FormWrapper } from "../components/elements/InputElements/FormWrapper";

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    submitting,
    registerError,
    resetPasswordData,
    onSubmit,
  } = useResetPassword();
  return (
    <FormWrapper>
      <form
        className="space-y-2 px-2 md:space-y-2"
        action="# "
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-sm text-white">
          Enter OTP, new password here & retype
        </p>
        <OTP
          register={register}
          errors={errors}
          label="OTP"
          placeholder="enter your otp"
        />
        <Password
          register={register}
          errors={errors}
          label="Password"
          placeholder="enter your new password"
        />
        <ConfirmPassword
          register={register}
          errors={errors}
          label="Confirm password"
          placeholder="retype your new password"
        />
        {registerError && (
          <span className="text-xs text-red-600">{registerError}</span>
        )}
        {resetPasswordData && resetPasswordData.status !== "success" && (
          <h3 className="text-center text-2xl text-blue-400">
            {resetPasswordData.message}
          </h3>
        )}
        <button type="submit" className="registerButton" disabled={submitting}>
          {submitting ? "Reseting..." : "Reset Password"}
        </button>
      </form>
      <div className="px-10 text-sm text-gray-400">
        <LoginLink title="Already have an account?" />
        <AssociateCompanyLogo />
      </div>
    </FormWrapper>
  );
};

export default ResetPasswordForm;
