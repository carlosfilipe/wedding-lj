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
              <div className="mt-10  max-w-md">
                
                <Typography.Heading type="h2" className="md:text-4xl text-center text-gray-600">
                  {"Cerimônia"}
                </Typography.Heading>

                <Typography.Paragraph className="text-gray-600 text-center text-2xl">
                  {"Dia 29 de Agosto de 2026 às 10h30 na Paróquia São João Dom Bosco, Núcleo Bandeirante - DF."}
                </Typography.Paragraph>
                
              </div>
              <div className="flex justify-center items-center mt-5">
                <MapsIFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4607.268202620055!2d-47.96947392413265!3d-15.87106528478004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2fc3a3dacb07%3A0xe58a658a6d8c4f1b!2zUGFyw7NxdWlhIFPDo28gSm_Do28gQm9zY28!5e1!3m2!1spt-BR!2sbr!4v1778963611287!5m2!1spt-BR!2sbr" />
              </div>
              
              <div className="mt-10  max-w-md">
                
                <Typography.Heading type="h2" className="md:text-4xl text-center text-gray-600">
                  {"Recepção"}
                </Typography.Heading>

                <Typography.Paragraph className="text-gray-600 text-center text-2xl">
                  {"Dia 29 de Agosto de 2026 às 12h00 no Green Park, Park Way - DF."}
                </Typography.Paragraph>
                
              </div>
              <div className="flex justify-center items-center mt-5">
                <MapsIFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4621.663925151073!2d-47.99019198849414!3d-15.897002825428066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2e95f4dd0dff%3A0x15d00f8dfae03615!2sGreen%20Park!5e1!3m2!1spt-BR!2sbr!4v1779205797611!5m2!1spt-BR!2sbr" />
              </div>

            </div>

<div className="lg:block hidden relative h-full">
  <Image
    src="/galeria/ROMANTICA-37.jpg"
    alt={t("photosOfGabrielAndGabriela")}
    fill
    className="object-cover object-center rounded-lg"
    sizes="(max-width: 1024px) 0vw, 50vw"
  />
</div>
          </div>
        ) : null}
      </SectionLayout>
    </div>
  );
};
