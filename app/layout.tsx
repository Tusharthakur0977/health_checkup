import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BookModalProvider from "./_context/BookModalContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const GTM_ID = "GTM-WPWDT5RS";

export const metadata: Metadata = {
  title: "Clear Vikalp",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <script
          async
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossOrigin="anonymous"
        ></script>
        <title>Clear Vikalp</title>
      </head>
      <body suppressHydrationWarning={true}>
        <BookModalProvider>{children}</BookModalProvider>
      </body>
      <GoogleTagManager gtmId={GTM_ID} />
    </html>
  );
}
