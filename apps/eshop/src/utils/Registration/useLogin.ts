import { useReducer } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import type { LoginFormType } from "../../types/type";
import Cookies from "universal-cookie";
import { toast } from "react-hot-toast";

export const useLogin = () => {
  const captchaRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormType>({ mode: "onChange" });

  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "submitting":
          return { ...prevState, submitting: action.value };
        case "error":
          return { ...prevState, loginError: action.value };
        case "loggedInData":
          return { ...prevState, loggedInData: action.value };
        default:
          return prevState;
      }
    },
    {
      submitting: false,
      loginError: "",
      loggedInData: undefined,
    }
  );

  const cookies = new Cookies();

  const password = watch("password", "");

  const handleCaptcha = () => {
    //  const token = captchaRef.current
  };

  const onSubmit = async (data: LoginFormType) => {
    dispatch({ type: "submitting", value: true });
    dispatch({ type: "error", value: "" });

    try {
      console.log(data);
    } catch (error: any) {
      toast.error(error.message);
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
