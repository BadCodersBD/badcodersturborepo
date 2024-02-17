import LoginauthReducer from "./loginauth-reducer";

export const loginauthRootReducer: Record<string, typeof LoginauthReducer> = {
  auth: LoginauthReducer,
} as const;
