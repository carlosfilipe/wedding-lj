"use client";
import { Typography } from "@/src/components/ui";
import { SectionLayout } from "../layouts";
import { useVisibilityObserver } from "@/src/lib/hooks";
import { useTranslations } from "next-intl";

export const OurStory = () => {
  const { ref, isVisible } = useVisibilityObserver<HTMLDivElement>({
    options: { threshold: 0.8 },
  });
  const t = useTranslations("OurStorySection");

  return (
    <div ref={ref}>
      <SectionLayout className="flex justify-center items-center pb-0">
        {isVisible ? (
          <div className="animate-fadeIn">
            <Typography.Heading type="h2" className="text-center md:text-4xl">
              {t("ourStory")}
            </Typography.Heading>
            <Typography.Paragraph className="text-center">
              {t("paragraph1")}
            </Typography.Paragraph>
            <Typography.Paragraph className="text-center">
              {t("paragraph2")}
            </Typography.Paragraph>
            <Typography.Paragraph className="text-center">
              {t("paragraph3")}
            </Typography.Paragraph>
          </div>
        ) : null}
      </SectionLayout>
    </div>
  );
};
