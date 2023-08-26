import { Visibility, VisibilityOff } from "@mui/icons-material/";
import { useState } from "react";

export const OTP = ({
  register,
  errors,
  label,
  placeholder,
}: {
  register: any;
  errors: any;
  label: string;
  placeholder: string;
}) => {
  const [showOTP, setShowOTP] = useState(false);

  const handlePasswordVisibility = (e: any) => {
    e.preventDefault();
    setShowOTP(!showOTP);
  };

  return (
    <div className="pb-1">
      <label htmlFor="password" className="registerLabel">
        {label}
      </label>
      <div className="flex justify-end">
        <input
          type={showOTP ? "text" : "password"}
          style={{
            outline: errors.otp ? "0.125rem solid rgb(220, 38, 38)" : "",
          }}
          placeholder={placeholder}
          id="otp"
          name="otp"
          className="registerTextInput"
          {...register("otp", { required: true, minLength: 5 })}
        />
        <button
          className="absolute mr-2 mt-1 text-white"
          onClick={handlePasswordVisibility}
        >
          {showOTP ? (
            <VisibilityOff className="text-black" />
          ) : (
            <Visibility className="text-black" />
          )}
        </button>
      </div>
      {errors.otp && (
        <span className="text-xs text-red-600">
          {errors.otp.type === "required" && "OTP is required"}
          {errors.otp.type === "minLength" &&
            "OTP must be at least 5 characters long"}
        </span>
      )}
    </div>
  );
};
