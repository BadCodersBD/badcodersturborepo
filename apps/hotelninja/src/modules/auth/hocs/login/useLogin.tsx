import { useMemo, useState } from "react";
import { signIn } from "next-auth/react";
import { useAppSelector, useAppDispatch } from "../../../../_redux/hooks/hooks";
import {
  handleErros,
  handleSubmitting,
} from "../../_redux/actions/login-auth-actions";
import { postMethod } from "../../../../utils/api/postMethod";
import { endPoints } from "../../../../utils/api/route";
// import { useSession } from "next-auth/react";
// import type { ResponseType } from "../../../../types";
// import { useRouter } from "next/navigation";

export const useLogin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLogin, setIslogin] = useState(false);
  const { loginError } = useAppSelector(
    (state) => state?.loginauthReducer?.auth?.errors,
  );
  const { emailorphone, password } = useAppSelector(
    (state) => state?.loginauthReducer?.auth?.loginInput,
  );
  // const { data: session } = useSession();
  const isSubmitting = useAppSelector(
    (state) => state?.authReducer?.auth?.isSubmitting,
  );
  const dispatch = useAppDispatch();
  // const router = useRouter();
  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (email: string) =>
    email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const validatePassword = (email: string) => {
    const hasMinimumLength = email.length >= 8;
    const hasUppercase = /[A-Z]/.test(email);
    const hasLowercase = /[a-z]/.test(email);
    const hasDigit = /\d/.test(email);
    return hasMinimumLength && hasUppercase && hasLowercase && hasDigit;
  };

  const isInvalid = useMemo(() => {
    if (emailorphone === "") return false;

    return validateEmail(`${emailorphone}`) ? false : true;
  }, [emailorphone]);

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

  const handleLogin = async () => {
    setIslogin(true);
    dispatch(handleSubmitting(true));
    await postMethod({
      route: endPoints.auth.login,
      postData: {
        email: emailorphone,
        password: password,
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
          dispatch(
            handleErros(
              "loginError",
              "",
            ),
          );
          // console.log(responseData?.data)
        }
        dispatch(handleSubmitting(false));
      })
      .catch((error) => {
        console.error(error);
        dispatch(handleSubmitting(false));
      })
      .finally(() => {
        setIslogin(false);
      });
  };

  // useEffect(() => {
  //   // @ts-expect-error type error is not solved
  //   if (session?.user?.token) {
  //     router.replace('/dashboard')
  //   }
  // }, [session, router])

  // console.log(session);

  return {
    isInvalid,
    emailorphone,
    isVisible,
    password,
    toggleVisibility,
    handleLogin,
    isInvalidPassword,
    handleSignUpwithgoogle,
    handleSignUpwithMicrosoft,
    loginError,
    isSubmitting,
    isLogin,
  };
};
