import type { FormElementProps } from "@/types/type";

const Name = ({ register, errors }: FormElementProps) => {
  return (
    <div className="flex gap-4">
      <div>
        <label
          htmlFor="firstName"
          className="mb-1 block text-sm font-medium opacity-70"
        >
          First Name:
        </label>
        <input
          name="firstName"
          placeholder="first name"
          className="mb-1 block w-full rounded-lg border-gray-400 border-2 p-2"
          type="text"
          style={{
            outline: errors.firstName ? "0.125rem solid rgb(220, 38, 38)" : "",
          }}
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && (
          <span className="text-xs text-red-600">
            {errors.firstName.message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="mb-1 block text-sm font-medium opacity-70"
        >
          Last Name:
        </label>
        <input
          name="lastName"
          placeholder="last Name"
          className="mb-1 block w-full border-gray-400 rounded-lg border-2 p-2"
          type="text"
          style={{
            outline: errors.lastName ? "0.125rem solid rgb(220, 38, 38)" : "",
          }}
          {...register("lastName", {
            required: "Last name is required",
          })}
        />
        {errors.lastName && (
          <span className="text-xs text-red-600">
            {errors.lastName.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default Name;
