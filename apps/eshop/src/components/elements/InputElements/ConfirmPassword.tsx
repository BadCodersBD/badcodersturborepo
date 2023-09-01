import { useInputSave } from "../../../utils/Registration/useInputSave";
import { Input, Space } from 'antd';

export const ConfirmPassword = ({
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

  return (
    <div>
      <label htmlFor="confirm-password" className="registerLabel">
        {label}
      </label>
      <Input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        defaultValue={localData?.confirmPassword}
        placeholder={placeholder}
        className="registerTextInput"
        style={{
          outline: errors.confirmPassword
            ? "0.125rem solid rgb(220, 38, 38)"
            : "",
        }}
        {...register("confirmPassword", {
          required: true,
          validate: (value: string) =>
            value === localData.password || "The passwords do not match",
        })}
        onChange={(e: any) => handleChange(e)}
      />
      {errors.confirmPassword && (
        <span className="text-xs text-red-600">
          {errors.confirmPassword.message}
        </span>
      )}
    </div>
  );
};
