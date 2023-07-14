import type { FormElementProps } from "@/types/type";

const Policy = ({ register, errors }: FormElementProps) => {
  return (
    <>
      <div className="flex justify-start text-black">
        <div className="flex h-5 items-center">
          <input
            id="policy"
            type="checkbox"
            className="registerCheckbox"
            style={{
              outline: errors.policy ? "0.125rem solid rgb(220, 38, 38)" : "",
            }}
            {...register("policy", { required: true })}
          />
        </div>
        <div className="ml-2 text-sm font-medium opacity-70">
          I agree to our friendly privacy policy.
        </div>
      </div>
      {errors.policy && (
        <span className="text-xs text-red-600">
          Please accept the privacy policy
        </span>
      )}
    </>
  );
};

export default Policy;
