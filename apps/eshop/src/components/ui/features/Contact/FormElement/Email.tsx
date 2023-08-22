import type { FormElementProps } from "@/types/type";

const Email = ({ register, errors }: FormElementProps) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="mb-1 block text-sm font-medium opacity-70"
      >
        Email:
      </label>
      <input
        name="email"
        placeholder="email"
        className="mb-1 block w-full rounded-lg border-2 border-gray-400 p-2"
        type="text"
        style={{
          outline: errors.email ? "0.125rem solid rgb(220, 38, 38)" : "",
        }}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
          },
        })}
      />
      {errors.email && (
        <span className="text-xs text-red-600">{errors.email.message}</span>
      )}
    </div>
  );
};

export default Email;
