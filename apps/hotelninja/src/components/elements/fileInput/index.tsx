import React, { type ChangeEvent } from "react";
import { useAppDispatch } from "../../../_redux/hooks/hooks";
import type { UnknownAction, Dispatch } from "@reduxjs/toolkit";

type Props = {
  name: string;
  isInvalid?: boolean;
  errorMessage?: string;
  label?: string;
  value?: File | null | undefined;
  handleChange: (
    name: string,
    value: string,
  ) => (dispatch: Dispatch<UnknownAction>) => void;
};

const FileInput = ({
  name,
  isInvalid,
  errorMessage,
  label,
  handleChange,
}: Props) => {
  const dispatch = useAppDispatch();

  const inputFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const base64String = await convertFileToBase64(selectedFile);
      dispatch(handleChange(name, base64String));
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          if (typeof reader.result === "string") {
            const base64String = reader.result;
            resolve(base64String);
          } else {
            reject(new Error("Unexpected type. Expected string."));
          }
        } else {
          reject(new Error("Failed to read file as base64"));
        }
      };

      reader.onerror = () => {
        reject(new Error("Error reading file"));
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <label
        className="block text-xs font-medium text-gray-900 dark:text-white"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="block w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-[#F4F4F5] p-[3px] text-xs text-gray-900 focus:outline-none dark:border-[#3F3F46] dark:bg-[#27272A] dark:text-gray-400 dark:placeholder-[#3F3F46]"
        id={name}
        name={name}
        type="file"
        onChange={inputFileChange}
      />
      {isInvalid && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default FileInput;
