import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-avocado-100  py-4 text-center w-screen">
      <p className="text-avocado-light text-sm m-0 font-medium">
        {t("footer")}
      </p>
    </footer>
  );
};

export default Footer;
