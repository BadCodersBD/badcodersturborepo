import { useReducer } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import type { ForgetPasswordFormType } from "../../types/type";
import { useRouter } from "next/router";

export const useForgetPassword = () => {
  const captchaRef = useRef(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordFormType>({ mode: "onChange" });

  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "submitting":
          return { ...prevState, submitting: action.value };
        case "error":
          return { ...prevState, forgetPasswordError: action.value };
        case "sentOtpData":
          return { ...prevState, sentOtpData: action.value };
        default:
          return prevState;
      }
    },
    {
      submitting: false,
      registerError: "",
      sentOtpData: undefined,
    }
  );

  const handleCaptcha = () => {
    const token = captchaRef.current;
  };

  const onSubmit = async (data: ForgetPasswordFormType) => {
    dispatch({ type: "submitting", value: true });
    dispatch({ type: "error", value: "" });
    try {
      console.log(data);
      router.push("/reset-password");
    } catch (error: any) {
      dispatch({ type: "error", value: error });
    } finally {
      dispatch({ type: "submitting", value: false });
    }
  };
  return { register, handleSubmit, errors, captchaRef, onSubmit, ...state };
};
