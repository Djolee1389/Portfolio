import type { Metadata } from "next";
import Navbar from "../components/navbar";
import "./globals.css";
import { Providers } from "./providers";
import { Footer } from "@/components/Footer";
import { RecaptchaProviderWrapper } from "@/components/RecaptchaProviderWrapper"; 
import {NextIntlClientProvider} from 'next-intl';

export const metadata: Metadata = {
  metadataBase: new URL("https://djordjemilutin.vercel.app"),
  title: "Djordje Milutin | Portfolio",
  description: "Frontend developer portfolio showcasing projects and skills.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <RecaptchaProviderWrapper>
            <Providers>
              <Navbar />
              {/* <div className="ab"></div> */}
              <main className="min-h-screen flex">{children}</main>
              <Footer />
            </Providers>
          </RecaptchaProviderWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
