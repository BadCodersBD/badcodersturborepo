import * as Types from "../types/auth-type";
import type { ILoginAuthReducer } from "../interface";
import type { AnyAction } from "@reduxjs/toolkit";

const initialState: ILoginAuthReducer = {
loginInput: {
    emailorphone: "",
    password: "",
},
  isSubmitting: false,
  errors: "",
};

const LoginauthReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case Types.CHANGE_LOGIN_INPUT:
      const LoginInput = { ...state.loginInput };

      return {
        ...state,
        loginInput: { ...LoginInput, ...action.payload },
      };
    default:
      break;
  }
  return state;
};

export default LoginauthReducer;
