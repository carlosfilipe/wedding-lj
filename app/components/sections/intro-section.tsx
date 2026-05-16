"use client";

import { classNames } from "@/src/lib/styles/class-names";
import { Typography } from "@/src/components/ui";
import { useTranslations } from "next-intl";

export const IntroSection = () => {
  return (
    <div className="relative w-screen h-screen md:bg-fixed bg-[url('/images/flowers-background2.jpeg')] bg-bottom bg-contain">
      <DarkOverlay />
      <WeddingContent />
    </div>
  );
};

const DarkOverlay = () => (
  <div className="z-0 top-0 bottom-0 left-0 right-0 bg-white opacity-75 flex justify-center items-center absolute" />
);

const CONTENT_CENTER_CLASSES =
  "z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2";
const CONTENT_DISPLAY_CLASSES = "flex flex-col justify-center items-center";

const WeddingContent = () => {
  const t = useTranslations("IntroSection");

  return (
    <div
      className={classNames(
        CONTENT_CENTER_CLASSES,
        CONTENT_DISPLAY_CLASSES,
        "animate-entrance"
      )}
    >
      <Typography.Heading
        type="h2"
        className="text-8xl text-black font-bulgattie "
      >
        Letícia
        <span className="block text-center md:inline"> {t("and")}</span>
        João
      </Typography.Heading>

      <Typography.Paragraph className="text-black text-2xl text-center whitespace-nowrap uppercase">
        {t("date")}
      </Typography.Paragraph>
    </div>
  );
};
