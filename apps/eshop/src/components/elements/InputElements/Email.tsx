import type { FieldError, UseFormRegister } from "react-hook-form";
import { useInputSave } from "../../../utils/Registration/useInputSave";
import { Input, Space } from 'antd';

type Props = {
  register: UseFormRegister<Record<string, string>>;
  errors: Record<string, FieldError>;
};

export const Email = ({ register, errors }: Props) => {
  const { localData, handleChange } = useInputSave();

  return (
    <div className="pb-1">
      <label htmlFor="email" className="registerLabel">
        Email or Phone
      </label>
      <Input
        type="text"
        id="email"
        name="email"
        defaultValue={localData?.email}
        className="registerTextInput"
        style={{
          outline: errors.email ? "0.125rem solid rgb(220, 38, 38)" : "",
        }}
        placeholder="enter your email or phone number"
        {...register("email", {
          required: true,
          // required: 'Email is required',
          // pattern: {
          //   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          //   message: 'Please enter a valid email address',
          // },
        })}
        onChange={(e) => handleChange(e)}
      />
      {errors.email && (
        <span className="text-xs text-red-600">
          {" "}
          {errors.email.type === "required" &&
            "Email or Phone number is required"}
        </span>
      )}
    </div>
  );
};
