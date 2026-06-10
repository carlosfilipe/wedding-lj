"use client";
import { Typography } from "@/src/components/ui";
import { RSVPWhatsAppButton } from "../../components/rsvp-whatsapp-button";
import { useTranslations } from "next-intl";

export default function Rsvp() {
  const t = useTranslations("RsvpPage");

  return (
    <div className="flex-grow flex flex-col justify-center items-center text-center">
      <div className="md:pt-0 pt-5 max-w-7xl flex flex-col items-center text-gray-600">
        <Typography.Heading>{t("confirmYourPresence")}</Typography.Heading>

        <Typography.Paragraph>
          {t("yourPresenceIsImportant")}
        </Typography.Paragraph>

        <Typography.Paragraph>{t("countOnYou")}</Typography.Paragraph>
        <RSVPWhatsAppButton title={t("confirmPresence")} />
      </div>
    </div>
  );
}
