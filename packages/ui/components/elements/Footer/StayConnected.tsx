import { Styled } from "./StayConnected.style";
import { useFooter } from "../../utils/cms/useFooter";
import { useState } from "react";
import { Congrats } from "ui/components/elements/Congrats/Congrats";
import { regEx } from "../../utils/RegEx/Regex";
import { useTranslation } from "next-i18next";
import { GenericSpinner } from "../GenericSpinner/GenericSpinner";

const StayConnected = () => {
  const { t } = useTranslation("footer");
  const [showCongrats, setShowCongrats] = useState(true);
  const {
    footerData,
    register,
    handleSubmit,
    errors,
    onSubmit,
    submitting,
    subscribeData,
  } = useFooter();

  if (subscribeData?.status === "success") {
    setTimeout(() => {
      setShowCongrats(false);
    }, 5000);
  }

  if (footerData.length < 1) {
    return (
      <div className="flex items-center justify-center px-2 py-10">
        <GenericSpinner diameter={100} />
      </div>
    );
  }

  return (
    <>
      {footerData.length > 0 && (
        <Styled.StayConnected className="lg:pr-5">
          <h5> {t(footerData[0]?.headingEng)} </h5>
          <p className="text-sm md:h-14">{t(footerData[0]?.subHeadingEng)}</p>
          {footerData[0].signUp &&
            (subscribeData?.status === "success" ? (
              <div>
                <h5>{t(subscribeData.message)}</h5>
                {showCongrats && <Congrats width={10} height={10} />}
              </div>
            ) : (
              <Styled.SubscribeButton>
                <input
                  id="email"
                  type="email"
                  placeholder={t(`Enter your Email`)}
                  style={{
                    outline: errors.email ? "2px solid rgb(220, 38, 38)" : "",
                  }}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: regEx.email,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                <button onClick={handleSubmit(onSubmit)} disabled={submitting}>
                  {submitting ? t(`Subscribing...`) : t(`Subscribe`)}
                </button>
              </Styled.SubscribeButton>
            ))}
          <>
            <>
              {errors.email && (
                <div className="text-xs text-red-600">
                  {t(errors.email.message)}
                </div>
              )}
            </>
            {subscribeData && subscribeData?.status !== "success" && (
              <div className="text-xs text-red-600">
                {t(subscribeData.message)}
              </div>
            )}
          </>
        </Styled.StayConnected>
      )}
    </>
  );
};

export default StayConnected;
