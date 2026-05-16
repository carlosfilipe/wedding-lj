"use client";
import { Typography } from "@/src/components/ui";
import { useCountdown } from "./hooks/use-cont-down";
import { useTranslations } from "next-intl";

export const Countdown = ({ countDate }: { countDate: Date }) => {
  const t = useTranslations("Countdown");
  const { countDown } = useCountdown(countDate);

  const isPastedTime = countDown.days < 0;

  return (
    <div className="flex flex-col items-center justify-center">
      <Typography.Heading type="h2" className="md:text-4xl">
        {isPastedTime ? t("timePassed") : t("countdown")}
      </Typography.Heading>

      <Typography.Paragraph className="text-center">
        {t(getCountdownMessage(countDown.days))}
      </Typography.Paragraph>

      <div className="flex mt-4">
        <Count time={countDown.days} unit={t("days")} />
        <VerticalLine />
        <Count time={countDown.hour} unit={t("hours")} />
        <VerticalLine />
        <Count time={countDown.minutes} unit={t("minutes")} />
        <VerticalLine />
        <Count time={countDown.seconds} unit={t("seconds")} />
      </div>
    </div>
  );
};

const VerticalLine = () => <div className="w-[1px] h-[4rem] bg-avocado-200" />;

const Count = ({ time, unit }: { time: number; unit: string }) => {
  return (
    <div className="h-[5rem] md:w-[7rem] w-[5.5rem]  flex flex-col items-center justify-center">
      <Typography.Paragraph className="md:text-4xl text-2xl text-avocado-200">
        {time}
      </Typography.Paragraph>
      <Typography.Paragraph className="text-avocado-200">
        {unit}
      </Typography.Paragraph>
    </div>
  );
};

export const getCountdownMessage = (days: number) => {
  if (days === 0) {
    return "timeArrivedMessage";
  }
  if (days < 0) {
    return "passedTimeMessage";
  }
  if (days < 7) {
    return "closeTimeMessage";
  }

  return "longTimeMessage";
};
