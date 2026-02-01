"use client";

import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export function RecaptchaProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
