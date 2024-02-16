import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "~@/_redux/store/store";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <NextThemesProvider defaultTheme="system" attribute="class">
        <NextUIProvider>
        <Provider store={store}>
          <Component {...pageProps} />
          <Toaster/>
          </Provider>
        </NextUIProvider>
      </NextThemesProvider>
    </SessionProvider>
  );
};

export default MyApp;
