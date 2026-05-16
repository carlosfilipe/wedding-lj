import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "../LocaleSwitcherSelect";
import { Typography } from "@/src/components/ui";

const FlagIcon = ({ code, className }: { code: string; className?: string }) => (
  <img
    src={`/flags/s/${code}.svg`}
    alt={code}
    width={20}
    height={15}
    className={className}
  />
);

export default function LocaleSwitcher({
  arrowClassName,
}: {
  arrowClassName?: string;
}) {
  const locale = useLocale();

  return (
    <div>
      <LocaleSwitcherSelect
        arrowClassName={arrowClassName}
        defaultValue={locale}
        renderInputValue={(value) => <FlagIcon code={value} />}
        items={[
          {
            value: "pt-BR",
            label: <LocaleLabel flag="pt-BR" label="Br" />,
          },
          {
            value: "EN",
            label: <LocaleLabel flag="EN" label="En" />,
          },
          {
            value: "ES",
            label: <LocaleLabel flag="ES" label="Es" />,
          },
        ]}
      />
    </div>
  );
}

const LocaleLabel = ({ flag, label }: { flag: string; label: string }) => {
  return (
    <div className="flex items-center gap-2">
      <FlagIcon code={flag} className="border-none" />
      <Typography.Paragraph className="flex items-center gap-2 m-0 text-sm">
        {label}
      </Typography.Paragraph>
    </div>
  );
};
