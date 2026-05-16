import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./styles/custom.css";
import Footer from "./components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Letícia e João",
  description: "Casamento de Letícia e João",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className="flex flex-col w-screen h-screen bg-avocado-light">
        <NextIntlClientProvider>
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
