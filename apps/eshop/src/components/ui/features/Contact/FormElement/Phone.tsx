import type { FormElementProps } from "@/types/type";

const Phone = ({ register, errors }: FormElementProps) => {
  return (
    <div>
      <label
        htmlFor="phone"
        className="mb-1 block text-sm font-medium opacity-70"
      >
        Phone number:
      </label>
      <input
        name="phone"
        placeholder="phone number"
        className="mb-1 block w-full border-gray-400 rounded-lg border-2 p-2"
        type="text"
        style={{
          outline: errors.phone ? "0.125rem solid rgb(220, 38, 38)" : "",
        }}
        {...register("phone", {
          required: "Phone is required",
        })}
      />
      {errors.phone && (
        <span className="text-xs text-red-600">{errors.phone.message}</span>
      )}
    </div>
  );
};

export default Phone;
