import { useVisibilityObserver } from "@/src/lib/hooks";
import { weddingDate } from "../../constants";
import { Countdown } from "../countdown/countdown";
import { MapsIFrame } from "../map-iframe";
import { SectionLayout } from "../layouts";
import { Typography } from "@/src/components/ui";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const AboutWedding = () => {
  const { ref, isVisible } = useVisibilityObserver<HTMLDivElement>({
    options: { threshold: 0.8 },
  });

  const t = useTranslations("AboutWeddingSection");

  return (
    <div ref={ref}>
      <SectionLayout>
        {isVisible ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-15 animate-fadeIn">
            <div className="flex flex-col items-center">
              <Countdown countDate={weddingDate} />
              <div className="mt-20  max-w-md">
                <Typography.Paragraph className="text-avocado-200 text-center text-2xl">
                  {t("info")}
                </Typography.Paragraph>
              </div>
              <div className="flex justify-center items-center mt-5">
                <MapsIFrame />
              </div>
            </div>

            <div className="lg:block hidden">
              <Image
                src="/galeria/ROMANTICA-37.jpg"
                alt={t("photosOfGabrielAndGabriela")}
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        ) : null}
      </SectionLayout>
    </div>
  );
};
