import authReducer from "./auth-reducer";

export const authRootReducer: Record<string, typeof authReducer> = {
  auth: authReducer,
} as const;
