"use client";

import { Typography } from "@/src/components/ui";
import { PixQrCode } from "../../components/pix-qr-code";
import { GiftListLink } from "../../components/gift-list-link";
import { useTranslations } from "next-intl";

export default function Gifts() {
  const t = useTranslations("GiftPage");

  return (
    <div className="flex-grow flex flex-col justify-center items-center">
      <div className="md:pt-0 pt-5 max-w-7xl">
        <Typography.Heading className="text-center">
          {t("listOfGifts")}
        </Typography.Heading>
        <Typography.Paragraph className="text-center">
          {t("paragraph")}
        </Typography.Paragraph>
        <div className="flex md:flex-row flex-col mt-10 items-center">
          <div className="mt-5 flex-1 flex md:justify-end justify-center md:mr-20 mr-0">
            <GiftListLink text={t("giftLink")} />
          </div>
          {/* Vertical line for desktop version */}
          <div className="hidden md:block h-64 w-px bg-gray-300 mx-4" />
          {/* Mobile version: just "ou" text */}
          <div className="md:hidden my-5 text-sm text-gray-500 text-center">
            {t("or")}
          </div>

          <div className="flex-1 flex md:ml-20 ml-0">
            <PixQrCode text={t("pixMessage")} />
          </div>
        </div>
      </div>
    </div>
  );
}
