import { GalleryImage } from "@/src/components/ui";
import Image from "next/image";
import { useState } from "react";

export const ImageWithSpinner = ({ image }: { image: GalleryImage }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-full flex align-center justify-center">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-avocado-light border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <Image
        src={image.src}
        alt="Selected"
        className="rounded-lg h-[90vh] object-contain md:p-10 md:h-screen"
        height={800}
        width={800}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};
