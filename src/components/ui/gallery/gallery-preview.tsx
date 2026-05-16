import { classNames } from "@/src/lib/styles/class-names";
import { GalleryImage } from "./types";
import { JSX, useCallback, useRef, useEffect } from "react";
import { useLockBodyScroll } from "@/src/lib/hooks/use-block-scroll";
import { useKeyboard } from "@/src/lib/hooks/use-keyboard";

export type GalleryPreviewProps = {
  images: GalleryImage[];
  initImageIdx: number;
  onClose: () => void;
  renderImage?: (image: GalleryImage) => JSX.Element;
};

export const GalleryPreview = ({
  images,
  initImageIdx,
  onClose,
  renderImage,
}: GalleryPreviewProps) => {
  const galleryContainerRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll();

  useEffect(() => {
    const scrollContainer = galleryContainerRef.current;
    if (scrollContainer) {
      const scrollX = window.innerWidth * initImageIdx;
      scrollContainer.scrollTo({ left: scrollX, behavior: "instant" });
    }
  }, [initImageIdx]);

  const selectPrevImage = useCallback(() => {
    galleryContainerRef.current?.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth",
    });
  }, []);

  const selectNextImage = useCallback(() => {
    galleryContainerRef.current?.scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  }, []);

  useKeyboard({
    onKeyPressed: (key) => {
      if (key === "Escape") {
        onClose();
        return;
      }
      if (key === "ArrowLeft") {
        selectPrevImage();
        return;
      }
      if (key === "ArrowRight") {
        selectNextImage();
      }
    },
  });

  return (
    <div className="animate-fadeIn fixed inset-0 bg-black/90 z-999 flex">
      <CloseButton onClick={onClose} />
      <ArrowButton type="prev" onClick={selectPrevImage} />
      <ArrowButton type="next" onClick={selectNextImage} />

      <div
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hidden"
        onClick={onClose}
        ref={galleryContainerRef}
      >
        {images.map((image) => (
          <div
            id={image.src}
            className="snap-start snap-always flex-none w-screen h-screen"
            key={image.src}
          >
            <div onClick={(e) => e.stopPropagation()} className="w-fit mx-auto">
              {renderImage?.(image) ?? (
                <img
                  src={image.src}
                  alt="Selected"
                  className="rounded-lg h-[90vh] object-contain"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-4 right-4 cursor-pointer text-5xl text-white z-200"
  >
    &times;
  </button>
);

const ArrowButton = ({
  type,
  onClick,
}: {
  type: "next" | "prev";
  onClick: () => void;
}) => {
  const commonClasses =
    "absolute top-1/2 cursor-pointer text-5xl text-white z-200 transform-[translateY(-50%)]";
  const positionClass = type === "next" ? "right-4" : "left-4";
  const arrow = type === "next" ? <>&#8250;</> : <>&#8249;</>;

  return (
    <button onClick={onClick} className={classNames(commonClasses, positionClass)}>
      {arrow}
    </button>
  );
};
