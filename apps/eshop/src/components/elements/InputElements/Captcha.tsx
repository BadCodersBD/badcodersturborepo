import ReCAPTCHA from 'react-google-recaptcha'

type Props = {
  captchaRef: object
}

export const Captcha = ({ captchaRef }: Props) => {
  const captchaEnv = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY as string
  return <ReCAPTCHA theme="dark" sitekey={captchaEnv} ref={captchaRef} />
}
