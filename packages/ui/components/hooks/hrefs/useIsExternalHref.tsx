import { useEffect, useState } from "react";

// This has to be a hook as react has hydration issues if the function is called directly
export function useIsExternalHref(href: string | undefined): boolean {
  const [isExternalHref, setIsExternalHref] = useState(false);

  useEffect(() => {
    setIsExternalHref(getIsExternalHref(href));
  }, [href]);

  return isExternalHref;
}

function getIsExternalHref(href: string | undefined): boolean {
  if (typeof window === "undefined" || !href) return false;

  try {
    const hrefUrl = new URL(href);

    if (["tel:", "sms:", "mailto:"].includes(hrefUrl.protocol)) return false;

    return (
      hrefUrl.host !== window.location.host ||
      hrefUrl.port !== window.location.port ||
      hrefUrl.protocol !== window.location.protocol
    );
  } catch {
    return false;
  }
}
