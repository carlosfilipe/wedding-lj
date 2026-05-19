import { classNames } from "@/src/lib/styles/class-names";
import { useState } from "react";


const BOX_CLASS = "md:w-100 w-80 h-50 rounded-lg";

interface MapsIFrameProps {
  src: string; 
}

export const MapsIFrame = ({ src }: MapsIFrameProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={classNames("relative", BOX_CLASS)}>
      {isLoading ? (
        <div className="absotlute bg-black/10 animate-pulse rounded-lg w-full h-full" />
      ) : null}
      <iframe
        className={BOX_CLASS}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
