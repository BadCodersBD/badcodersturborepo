import { useState, useEffect, useReducer } from "react";
import { sanityClient } from "./sanity";
import { groq } from "next-sanity";
import { useForm } from "react-hook-form";
import type { FooterType } from "../../../types/types";
import type { subscriberEmailType } from "../../../types/types";

const stayconnected = groq`*[_type == "Footer"]`;

export function useFooter() {
  const [footerData, setFooterData] = useState<FooterType[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<subscriberEmailType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stayConnected = await sanityClient.fetch(stayconnected);
        stayConnected[0].signUp = true;
        setFooterData(stayConnected);
      } catch (e) {}
    };
    fetchData();
  }, []);

  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "submitting":
          return { ...prevState, submitting: action.value };
        case "error":
          return { ...prevState, registerError: action.value };
        case "subscribeData":
          return { ...prevState, subscribeData: action.value };
        default:
          return prevState;
      }
    },
    {
      submitting: false,
      registerError: "",
      subscribeData: undefined,
    }
  );

  const onSubmit = async (data: subscriberEmailType) => {
    dispatch({ type: "submitting", value: true });
    dispatch({ type: "error", value: "" });
    try {
      const response = await fetch(
        "https://neos-server.vercel.app/api/v1/subscriber/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email
          }),
        }
      );
      const result = await response.json();
      dispatch({ type: "subscribeData", value: result });
    } catch (error: any) {
      dispatch({ type: "error", value: error });
    } finally {
      dispatch({ type: "submitting", value: false });
    }
  };

  return {
    footerData,
    register,
    handleSubmit,
    errors,
    onSubmit,
    ...state,
  };
}
