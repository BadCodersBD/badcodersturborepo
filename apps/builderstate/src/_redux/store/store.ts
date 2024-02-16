// src/store/index.ts

import {
  combineReducers,
  configureStore,
  type Reducer,
  type ThunkAction,
  type UnknownAction,
} from "@reduxjs/toolkit";
import { themeRootReducer } from "../reducers/counters/themeReducer/_themeRootReducer";
import { authRootReducer } from "../../modules/auth/_redux/reducers/_authRootreducer";
import { loginauthRootReducer } from "../../modules/auth/_redux/reducers/_loginauthRootreducer";


export type RootState = {
  app: any;
  authReducer: {
    [key in keyof typeof authRootReducer]: ReturnType<
      (typeof authRootReducer)[key]
    >;
  };
  loginauthReducer: {
    [key in keyof typeof loginauthRootReducer]: ReturnType<
      (typeof loginauthRootReducer)[key]
    >;
  };
  theme: {
    [key in keyof typeof themeRootReducer]: ReturnType<
      (typeof themeRootReducer)[key]
    >;
  };
};

// Combine all module reducers into a single rootReducer
// @ts-expect-error type error is not solved
const rootReducer: Reducer<RootState> = combineReducers({
  authReducer: combineReducers(authRootReducer) as Reducer,
  loginauthReducer: combineReducers(loginauthRootReducer) as Reducer,
  theme: combineReducers(themeRootReducer) as Reducer,
  // Add more modules as needed
});

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, dev tools config, etc. if needed
});
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, UnknownAction>;

export default store;
