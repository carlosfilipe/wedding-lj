import { classNames } from "@/src/lib/styles/class-names";
import { useState } from "react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4607.268202620055!2d-47.96947392413265!3d-15.87106528478004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2fc3a3dacb07%3A0xe58a658a6d8c4f1b!2zUGFyw7NxdWlhIFPDo28gSm_Do28gQm9zY28!5e1!3m2!1spt-BR!2sbr!4v1778963611287!5m2!1spt-BR!2sbr";

const BOX_CLASS = "md:w-100 w-80 h-50 rounded-lg";

export const MapsIFrame = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={classNames("relative", BOX_CLASS)}>
      {isLoading ? (
        <div className="absotlute bg-black/10 animate-pulse rounded-lg w-full h-full" />
      ) : null}
      <iframe
        className={BOX_CLASS}
        src={GOOGLE_MAPS_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
