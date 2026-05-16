import { classNames } from "@/src/lib/styles/class-names";
import { GalleryImage } from "./types";
import { JSX } from "react";

const SPAN_DEFAULT = "col-span-1 row-span-1";
const SHAPE_TO_SPAN = {
  wide: "col-span-2",
  tall: "row-span-2",
  square: SPAN_DEFAULT,
};

export type GalleryGridProps = {
  images: GalleryImage[];
  selectImage: (index: number) => void;
  renderImage?: (image: GalleryImage) => JSX.Element;
};

export const GalleryGrid = ({
  images,
  selectImage,
  renderImage,
}: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 auto-rows-[150px] md:auto-rows-[200px] grid-flow-row-dense">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={classNames(
            "relative w-full h-full cursor-pointer",
            image.shape ? SHAPE_TO_SPAN[image.shape] : SPAN_DEFAULT
          )}
          onClick={() => selectImage(index)}
        >
          <div className="relative w-full h-full">
            {renderImage?.(image) ?? (
              <img
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                style={{ objectFit: "cover" }}
                className="w-full h-full rounded-lg"
              />
            )}
            <div className="absotlute bg-black/10 animate-pulse w-full h-full rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};
