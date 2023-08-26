import Link from "next/link";

const TermsConditions = () => {
  return (
    <div className="ml-3 text-[0.75rem]">
      <p className="font-light text-white">
        I accept to the{" "}
        <Link className="termsConditionLink" href="#">
          Terms and Conditions
        </Link>
        {" & "}
        <Link className="termsConditionLink" href="#">
          Privacy Policy
        </Link>
      </p>
      <p className="font-light text-white">
        {" and subscribe to "}
        <Link className="termsConditionLink" href="#">
          Newsletter
        </Link>
      </p>
    </div>
  );
};

export default TermsConditions;
