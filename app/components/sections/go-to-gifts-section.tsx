import Link from "next/link";
import { Button } from "../button";
import { Typography } from "@/src/components/ui";
import { useTranslations } from "next-intl";

export const GoToGiftsSection = () => {
  const t = useTranslations("GiftListSection");
  return (
    <div className="flex relative justify-center gap-20 items-center w-full bg-avocado-50 text-avocado-light p-10 text-xl">
      
      <div className="absolute w-full h-full bg-[url(/images/gifts.png)] bg-repeat bg-contain opacity-30" />
   
      <div className="flex flex-col justify-center items-center z-10">
        <Typography.Paragraph className="text-center font-semibold">
          {t("seeOurGiftList")}
        </Typography.Paragraph>
        <Link href="/gifts" className="flex gap-2">
          <Button
            style="outline"
            className="border-avocado-light text-avocado-light mt-5 bg-avocado-50"
          >
            {t("click")}
          </Button>
        </Link>
      </div>
  
    </div>
  );
};
