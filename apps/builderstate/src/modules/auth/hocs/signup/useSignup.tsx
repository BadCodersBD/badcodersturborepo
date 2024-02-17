import { useEffect, useMemo, useState } from "react";
import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "../../../../_redux/hooks/hooks";
import {
  // handleChangeRegisterInput,
  handleErros,
  // handleNextPrev,
  handleSubmitting,
} from "../../_redux/actions/auth-action";
import { postMethod } from "../../../../utils/api/postMethod";
import { endPoints } from "../../../../utils/api/route";
// import type { ResponseType } from "../../../../types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useSignup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const { signUpError } = useAppSelector(
    (state) => state?.authReducer?.auth?.errors,
  );
  const { email, password, phone, firstname, lastname, username } =
    useAppSelector((state) => state?.authReducer?.auth?.registerInput);

  const isSubmitting = useAppSelector(
    (state) => state?.authReducer?.auth?.isSubmitting,
  );
  const dispatch = useAppDispatch();
  const router = useRouter();
  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateUserName = (username: string) => {
    const hasUppercase = /[A-Z]/.test(username);
    const hasLowercase = /[a-z]/.test(username);
    const hasDigit = /\d/.test(username);
    return hasUppercase && hasLowercase && hasDigit;
  };

  const validateFirstName = (firstname: string) => {
    const hasUppercase = /[A-Z]/.test(firstname);
    const hasLowercase = /[a-z]/.test(firstname);
    return hasUppercase && hasLowercase;
  };

  const validateLastName = (lastname: string) => {
    const hasUppercase = /[A-Z]/.test(lastname);
    const hasLowercase = /[a-z]/.test(lastname);
    return hasUppercase && hasLowercase;
  };

  const validatePhone = (phone: string) => {
    const hasDigit = /\d/.test(phone);
    return hasDigit;
  };

  const validateEmail = (email: string) =>
    email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const validatePassword = (email: string) => {
    const hasMinimumLength = email.length >= 8;
    const hasUppercase = /[A-Z]/.test(email);
    const hasLowercase = /[a-z]/.test(email);
    const hasDigit = /\d/.test(email);
    return hasMinimumLength && hasUppercase && hasLowercase && hasDigit;
  };

  const isInvalidusername = useMemo(() => {
    if (username === "") return false;

    return validateUserName(`${username}`) ? false : true;
  }, [username]);

  const isInvalidfirstName = useMemo(() => {
    if (firstname === "") return false;

    return validateFirstName(`${firstname}`) ? false : true;
  }, [firstname]);

  const isInvalidLastName = useMemo(() => {
    if (lastname === "") return false;

    return validateLastName(`${lastname}`) ? false : true;
  }, [lastname]);

  const isInvalidPhone = useMemo(() => {
    if (phone === "") return false;

    return validatePhone(`${phone}`) ? false : true;
  }, [phone]);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(`${email}`) ? false : true;
  }, [email]);

  const isInvalidPassword = useMemo(() => {
    if (password === "") return false;

    return validatePassword(`${password}`) ? false : true;
  }, [password]);

  const handleSignUpwithgoogle = async () => {
    await signIn("google");
  };

  const handleSignUpwithMicrosoft = async () => {
    await signIn("github");
  };

  const handleSignUp = async () => {
    setIsSignup(true);
    dispatch(handleSubmitting(true));
    await postMethod({
      route: endPoints.auth.register,
      postData: {
        email: email,
        password: password,
        name: firstname,
        avatar: "noimage",
        // strFirstName: firstname,
        // strLastName: lastname,
        // strPhone: phone,
        // intConcernId: 1,
      },
    })
      .then(async (response) => {
        const responseData = response?.data;
        if (responseData) {
           await signIn("credentials", {
            ...responseData,
            redirect: false,
          });
        } else {
          dispatch(handleErros("SignUpError", responseData?.error || responseData?.message));
          toast.error(responseData.message, {
            duration: 3000,
            position: "top-center",
          });
        }
        dispatch(handleSubmitting(false));
      })
      .catch((error) => {
        console.error(error);
        dispatch(handleSubmitting(false));
      })
      .finally(() => {
        setIsSignup(false);
      });
  };

  // useEffect(() => {
  //   dispatch(handleNextPrev(0));
  //   dispatch(handleChangeRegisterInput("otp", 0));
  // }, [dispatch]);

  return {
    isInvalid,
    isVisible,
    toggleVisibility,
    handleSignUp,
    isInvalidPassword,
    isInvalidusername,
    isInvalidfirstName,
    isInvalidLastName,
    isInvalidPhone,
    handleSignUpwithgoogle,
    handleSignUpwithMicrosoft,
    signUpError,
    isSubmitting,
    username,
    firstname,
    lastname,
    phone,
    email,
    password,
    isSignup,
  };
};
