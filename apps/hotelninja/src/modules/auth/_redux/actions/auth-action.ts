import type { Dispatch } from "@reduxjs/toolkit";
import * as Types from "../types/auth-type";

export const handleChangeRegisterInput = (name: string, value: string | number)=> (dispatch: Dispatch)=>{
  const data = {
    [name]:value
  }
  dispatch({ type: Types.CHANGE_REGISTER_INPUT, payload: data });

}

export const handleNextPrev = (updatedStep: number)=> (dispatch: Dispatch)=>{
  
  dispatch({ type: Types.REGISTER_STEP_INCREMENT_DECREMENT, payload: updatedStep });

}

export const handleSubmitting = (isSubmitting: boolean) => (dispatch: Dispatch) => {
  dispatch({ type: Types.CHANGE_SUBMIT_STATUS, payload: isSubmitting })
}

export const handleErros = (errorName: string, errorValue: string) => (dispatch: Dispatch) => {
  const data = {
    [errorName]: errorValue,
  }
  dispatch({ type: Types.UPDATE_AUTHENTICATION_ERROR, payload: data })
}