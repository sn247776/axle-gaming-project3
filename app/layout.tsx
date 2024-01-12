import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/global/theme-provider";
import { ReduxProviders } from "@/redux/provider";
import GoogleProvider from "@/components/global/GoogleProvider";
import ToasterProvider from "@/components/global/ToasterProvider";
import GlobalHooks from "@/redux/global/globalHooks";

export const metadata: Metadata = {
  title: "Axle Gaming",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" h-screen">
      <GoogleProvider>
        <ReduxProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

            {children}
            <GlobalHooks />
            <ToasterProvider />
          </ThemeProvider>
        </ReduxProviders>
        </GoogleProvider>
      </body>
    </html>
  );
}
