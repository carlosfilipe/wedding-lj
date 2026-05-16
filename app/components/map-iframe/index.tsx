import { classNames } from "@/src/lib/styles/class-names";
import { useState } from "react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.2307057417047!2d-47.983472089633786!3d-15.896979925425292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2ec0a2233065%3A0xe7cc727638aeb2bd!2zRXNwYcOnbyBSZW5hc2NlbsOnYQ!5e0!3m2!1spt-BR!2sbr!4v1745801715254!5m2!1spt-BR!2sbr";

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
