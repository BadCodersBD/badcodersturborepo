"use client";
import axios, { type AxiosInstance } from "axios";
import { getSession } from "next-auth/react";

export const apiSetup = async () => {
  const api: AxiosInstance = axios.create({
    baseURL:  process.env.NEXT_PUBLIC_API_URL, 
  })

  const session = await getSession();
  // @ts-expect-error type error is not solved
  if (session?.user?.strAccess_token) {
    api.defaults.headers.common["X-Frame-Options"] = "DENY";
    // @ts-expect-error type error is not solved
    api.defaults.headers.common.Authorization = `Bearer ${session.user.strAccess_token}`;
  }

  return api;
};
