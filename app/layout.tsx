import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BookModalProvider from "./_context/BookModalContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const GTM_ID = "GTM-WPWDT5RS";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossOrigin="anonymous"
        ></script>
        <title>Clear Vikalp</title>
        <meta title="Clear Vikalp" />
      </head>
      <body>
        <BookModalProvider>
          {children}
          <GoogleTagManager gtmId={GTM_ID} />
        </BookModalProvider>
      </body>
    </html>
  );
}
