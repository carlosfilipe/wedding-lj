import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./styles/custom.css";
import Footer from "./components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Gabriela e Gabriel",
  description: "Casamento de Gabriela e Gabriel",
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
