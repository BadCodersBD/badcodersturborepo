"use client";
import "~@/styles/globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { endPoints } from "~@/utils/api/route";
import { postMethod } from "~@/utils/api/postMethod";
import { useAppDispatch, useAppSelector } from "~@/_redux/hooks/hooks";
import { handleErros } from "~@/modules/auth/_redux/actions/login-auth-actions";
import store from "~@/_redux/store/store";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <div>
          <SessionProvider>
            <NextThemesProvider defaultTheme="system" attribute="class">
              <NextUIProvider>
                <Provider store={store}>
                  <Main>{children}</Main>
                  <Toaster position="top-center" />
                </Provider>
              </NextUIProvider>
            </NextThemesProvider>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}

const Main = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector((state) => state?.theme?.themeToggle?.dark);
  const { data: session } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleLogin = async () => {
      try {
        if (session?.user.id) {
          const response = await postMethod({
            route: endPoints.auth.login,
            postData: {
              strEmailOrPhone: session?.user.email,
              strPassword: session?.user.id,
            },
          });
          const responseData = response?.data;
          if (responseData) {
            dispatch(
              handleErros(
                "loginError",
                responseData?.error || responseData?.message,
              ),
            );
          } else {
            dispatch(handleErros("loginError", ""));
            await signIn("credentials", {
              ...responseData,
              redirect: false,
            });
          }
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    };

    handleLogin();
  }, [session]);

  return <div className={`${theme ? "dark" : ""}`}>{children}</div>;
};
