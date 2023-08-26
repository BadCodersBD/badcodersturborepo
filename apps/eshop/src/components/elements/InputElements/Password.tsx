import { useInputSave } from "../../../utils/Registration/useInputSave";
import { usePasswordStrengthCheck } from "../../../utils/Registration/usePasswordStrengthCheck";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import { useState } from "react";

export const Password = ({
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
  const { localData, handleChange } = useInputSave();
  const { containerClassName } = usePasswordStrengthCheck(localData);
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = (e: any) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="pb-1">
      <label htmlFor="password" className="registerLabel">
        {label}
      </label>
      <div className="flex justify-end">
        <input
          type={showPassword ? "text" : "password"}
          style={{
            outline: errors.password ? "0.125rem solid rgb(220, 38, 38)" : "",
          }}
          placeholder={placeholder}
          defaultValue={localData?.password}
          id="password"
          name="password"
          className="registerTextInput"
          {...register("password", { required: true, minLength: 6 })}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="absolute mr-2 mt-1 text-white"
          onClick={handlePasswordVisibility}
        >
          {showPassword ? (
            <VisibilityOff className="text-gray-600" />
          ) : (
            <Visibility className="text-gray-600" />
          )}
        </button>
      </div>
      {errors.password && (
        <span className="text-xs text-red-600">
          {errors.password.type === "required" && "Password is required"}
          {errors.password.type === "minLength" &&
            "Password must be at least 6 characters long"}
        </span>
      )}

      <div className="mt-1 text-sm text-white">
        {containerClassName() === "weak" ? (
          <span>Your password is weak</span>
        ) : containerClassName() === "medium" ? (
          <span>Your password is medium</span>
        ) : containerClassName() === "strong" ? (
          <span>Your password is strong</span>
        ) : null}
        <div className={containerClassName()}></div>
      </div>
    </div>
  );
};
