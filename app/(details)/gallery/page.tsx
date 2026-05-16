"use client";

import { use, useEffect, useState } from "react";
import images from "./images.json";
import { GalleryGrid, GalleryImage, GalleryPreview } from "@/src/components/ui";
import Image from "next/image";
import { ImageWithSpinner } from "./components/image-with-spinner";

type SearchParams = {
  photo?: string;
};

type GalleryProps = {
  searchParams: Promise<SearchParams>;
};

export default function Gallery({ searchParams }: GalleryProps) {
  const { photo } = use(searchParams);
  const [imageToPreviewIdx, setImageToPreviewIdx] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (photo) {
      const imageIndex = images.findIndex((image) => image.src === photo);
      setImageToPreviewIdx(imageIndex);
    }
  }, [photo]);

  return (
    <div className="block w-full h-full">
      <GalleryGrid
        images={images as GalleryImage[]}
        selectImage={setImageToPreviewIdx}
        renderImage={(image) => (
          <Image
            src={image.src}
            alt="galery image"
            fill
            sizes="50vw"
            className="w-full h-full rounded-lg z-10 object-cover"
          />
        )}
      />
      {imageToPreviewIdx != null ? (
        <GalleryPreview
          renderImage={(image) => <ImageWithSpinner image={image} />}
          images={images as GalleryImage[]}
          initImageIdx={imageToPreviewIdx}
          onClose={() => setImageToPreviewIdx(null)}
        />
      ) : null}
    </div>
  );
}
