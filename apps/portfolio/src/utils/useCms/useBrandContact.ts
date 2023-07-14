import { useReducer } from "react";
import { useForm } from "react-hook-form";
import type { BrandContactFormType } from "../../types/type";

export const useBrandContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BrandContactFormType>({ mode: "onChange" });

  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "submitting":
          return { ...prevState, submitting: action.value };
        case "responseData":
          return { ...prevState, responseData: action.value };
        default:
          return prevState;
      }
    },
    {
      submitting: false,
      responseData: undefined,
    }
  );

  const onSubmit = async (data: BrandContactFormType) => {
    dispatch({ type: "submitting", value: true });
    dispatch({ type: "error", value: "" });
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/customer-messages/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email_address: data.email,
            first_name: data.firstName,
            last_name: data.lastName,
            message_body: data.message,
            phone_number: data.phone,
          }),
        }
      );

      const result = await response.json();
      dispatch({ type: "responseData", value: result });
    } catch (error: any) {
      console.log(error);
    } finally {
      dispatch({ type: "submitting", value: false });
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    ...state,
  };
};
