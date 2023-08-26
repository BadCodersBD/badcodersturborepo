import { useReducer } from "react";
import { useForm } from "react-hook-form";
import type { ResetPasswordFormType } from "../../types/type";

export const useResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ResetPasswordFormType>({ mode: "onChange" });
  const password = watch("password", "");

  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "submitting":
          return { ...prevState, submitting: action.value };
        case "error":
          return { ...prevState, registerError: action.value };
        case "resetPasswordData":
          return { ...prevState, resetPasswordData: action.value };
        default:
          return prevState;
      }
    },
    {
      submitting: false,
      registerError: "",
      resetPasswordData: undefined,
    }
  );

  const onSubmit = handleSubmit(async (data: ResetPasswordFormType) => {
    dispatch({ type: "submitting", value: true });
    dispatch({ type: "error", value: "" });
    try {
      console.log(data);
    } catch (error: any) {
      dispatch({ type: "error", value: error });
    } finally {
      dispatch({ type: "submitting", value: false });
    }
  });

  return { register, handleSubmit, errors, password, onSubmit, ...state };
};
