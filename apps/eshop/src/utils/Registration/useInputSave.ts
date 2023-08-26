import { useState, useEffect } from "react";

export const useInputSave = () => {
  const defaultValue = { password: "", name: "", email: "" };
  const [localData, setLocalData] = useState(defaultValue);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedData = localStorage.getItem("formData");
      const value =
        storedData && storedData !== "undefined"
          ? JSON.parse(storedData)
          : defaultValue;
      setLocalData(value);
    }
  }, []);

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const storedData = localStorage.getItem("formData");
    const data =
      storedData && storedData !== "undefined" ? JSON.parse(storedData) : {};
    const newData = { ...data, [event.target.name]: event.target.value };
    localStorage.setItem("formData", JSON.stringify(newData));
    setLocalData(newData);
  };

  return { handleChange, localData };
};
