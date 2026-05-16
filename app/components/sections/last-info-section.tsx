import { Typography } from "@/src/components/ui";
import { SectionLayout } from "../layouts";
import { RSVPWhatsAppButton } from "../rsvp-whatsapp-button";
import { useTranslations } from "next-intl";

export const LastInfoSection = () => {
  const t = useTranslations("LastInfoSection");

  return (
    <SectionLayout className="flex flex-col items-center">
      <Typography.Heading type="h2" className="text-center md:text-4xl">
        {t("seeYouThere")}
      </Typography.Heading>
      <Typography.Paragraph className="text-center">
        {t("confirmYouPresence")}
      </Typography.Paragraph>
      <RSVPWhatsAppButton title={t("confirmPresence")} />
    </SectionLayout>
  );
};
