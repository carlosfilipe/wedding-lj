import { Typography } from "@/src/components/ui";
import { SectionLayout } from "../layouts";
import { RSVPWhatsAppButton } from "../rsvp-whatsapp-button";
import { useTranslations } from "next-intl";

export const LastInfoSection = () => {
  const t = useTranslations("LastInfoSection");

  return (
    <SectionLayout className="flex flex-col items-center">
      <Typography.Heading type="h2" className="text-center md:text-4xl text-gray-600">
        {t("seeYouThere")}
      </Typography.Heading>
      <Typography.Paragraph className="text-center text-gray-800">
        {t("confirmYouPresence")}
      </Typography.Paragraph>
      <RSVPWhatsAppButton title={t("confirmPresence")} />
    </SectionLayout>
  );
};
