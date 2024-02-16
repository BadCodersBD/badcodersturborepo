import * as Types from "../types/auth-type";
import type { IAuthReducer } from "../interface";
import type { AnyAction } from "@reduxjs/toolkit";

const initialState: IAuthReducer = {
  registerInput: {
    email: "",
    password: "",
    // firstName: "",
    // lastName: "",
    // phone: "",
    username: "",
  },
  isSubmitting: false,
  errors: "",
};

const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case Types.CHANGE_REGISTER_INPUT:
      const registerInput = { ...state.registerInput };

      return {
        ...state,
        registerInput: { ...registerInput, ...action.payload },
      };
    case Types.REGISTER_STEP_INCREMENT_DECREMENT:
      return {
        ...state,
        step: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default authReducer;
