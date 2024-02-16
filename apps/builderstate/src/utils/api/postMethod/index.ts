"use client";
import { apiSetup } from "../api";

type Props = {
  route: string;
  postData: string | number | boolean | object | [];
};

export const postMethod = async ({ route, postData }: Props) => {
  try {
    const api = apiSetup();
    const response = await (await api).post(route, postData);
    return response;
  } catch (error) {
    throw error;
  }
};

type PostMethodEventProps = {
  route: string;
  postData: string | number | boolean | object | [];
  onUploadProgress?: (progressEvent: any) => void;
};

export const postMethodWithEvent = async ({
  route,
  postData,
  onUploadProgress,
}: PostMethodEventProps) => {
  try {
    const api = apiSetup();
    const response = await (
      await api
    ).post(route, postData, {
      onUploadProgress, // Include the onUploadProgress event handler here
    });
    return response;
  } catch (error) {
    throw error;
  }
};
