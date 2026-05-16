import { GalleryGrid, GalleryImage, Typography } from "@/src/components/ui";
import images from "../../constants/section-images.json";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const GallerySection = () => {
  const router = useRouter();
  const t = useTranslations("GalerySection");
  const goToGallery = (image: number) => {
    router.push(`/gallery?photo=${images[image]?.src}`);
  };
  return (
    <div className="w-screen mt-20">
      <Typography.Heading type="h2" className="mx-10 text-4xl">
        {t("seeOurGalery")}
      </Typography.Heading>
      <GalleryGrid
        images={images as GalleryImage[]}
        selectImage={goToGallery}
        renderImage={(image) => (
          <Image
            src={image.src}
            alt="galery image"
            objectFit="cover"
            fill
            className="w-full h-full rounded-lg z-10"
          />
        )}
      />
      <Link
        href="/gallery"
        className="font-medium text-avocado-100 hover:text-avocado-200 mt-5 flex justify-center items-center gap-2 "
      >
        {t("seeCompleteGalery")} <ArrowForwardIcon style={{ margin: 0 }} />
      </Link>
    </div>
  );
};
