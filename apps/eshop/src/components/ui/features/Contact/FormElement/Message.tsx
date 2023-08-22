import type { FormElementProps } from "@/types/type";

const Message = ({ register, errors }: FormElementProps) => {
  return (
    <div>
      <label
        htmlFor="message"
        className="mb-1 block text-sm font-medium opacity-70"
      >
        Message:
      </label>
      <input
        name="message"
        placeholder=""
        className="mb-1 block h-32 w-full rounded-lg border-gray-400 border-2 p-2"
        type="text"
        style={{
          outline: errors.message ? "0.125rem solid rgb(220, 38, 38)" : "",
        }}
        {...register("message", {
          required: "Message is required",
        })}
      />
      {errors.message && (
        <span className="text-xs text-red-600">{errors.message.message}</span>
      )}
    </div>
  );
};

export default Message;
