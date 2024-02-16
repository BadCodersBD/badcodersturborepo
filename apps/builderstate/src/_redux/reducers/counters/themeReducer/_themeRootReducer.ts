import themeToggleReducer from "./themeToggleReducer";

type ReducerType<T> = (state: T, action: any) => T;

export type RootReducerType<T> = Record<string, ReducerType<T>>;

export const themeRootReducer: RootReducerType<any> = {
  themeToggle: themeToggleReducer,
} as const;
