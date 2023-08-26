import { useReducer } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import type { RegisterFormType } from "../../types/type";
import toast from "react-hot-toast";
import { regEx } from "../../../../../packages/ui/components/utils/RegEx/Regex";
import Cookies from "universal-cookie";

export const useRegister = () => {
  const captchaRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormType>({ mode: "onChange" });

  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "submitting":
          return { ...prevState, submitting: action.value };
        case "error":
          return { ...prevState, registerError: action.value };
        case "registerUserData":
          return { ...prevState, registerUserData: action.value };
        default:
          return prevState;
      }
    },
    {
      submitting: false,
      registerError: "",
      registerUserData: undefined,
    }
  );

  const password = watch("password", "");

  const cookies = new Cookies();

  const handleCaptcha = () => {
    //const token = captchaRef.current
  };

  const onSubmit = async (data: RegisterFormType) => {
    dispatch({ type: "submitting", value: true });
    dispatch({ type: "error", value: "" });
    const emailOrPhone = data.email;
    const isEmail = regEx.email.test(emailOrPhone);
    const isPhone = regEx.fullMobileNumber.test(emailOrPhone);
    const isEmailorPhone = !isEmail && !isPhone;
    if (isEmailorPhone) {
      toast.error("Email or Phone is not valid");
    }

    try {
      console.log(data);
    } catch (error: any) {
      dispatch({ type: "error", value: error.message });
    } finally {
      dispatch({ type: "submitting", value: false });
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    password,
    captchaRef,
    onSubmit,
    ...state,
  };
};
