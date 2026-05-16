"use client";

import { classNames } from "@/src/lib/styles/class-names";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type Props = {
  defaultValue: string;
  items: Array<{ value: Locale; label: React.ReactNode }>;
  arrowClassName?: string;
  renderInputValue?: (value: string) => React.ReactNode;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  arrowClassName,
  renderInputValue,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    items.find((item) => item.value === defaultValue) || items[0]
  );

  const toggle = () => setIsOpen(!isOpen);
  const select = (option: typeof selected) => {
    if (!option) return;

    setUserLocale(option.value as Locale);
    setSelected(option);
    setIsOpen(false);
  };

  if (!selected) {
    return null;
  }

  return (
    <>
      {isOpen ? (
        <div className="absolute inset-0 w-screen h-screen" onClick={toggle} />
      ) : null}
      <div className="relative inline-block">
        <button
          type="button"
          className="gap-2 px-3 py-2 flex items-center justify-between"
          onClick={toggle}
        >
          <div className="flex items-center gap-2">
            {renderInputValue?.(selected.value) ?? (
              <span>{selected.label}</span>
            )}
          </div>
          <span
            className={classNames(
              arrowClassName ?? "text-gray-500",
              isOpen ? "rotate-180" : ""
            )}
          >
            <ArrowDropDownIcon style={{ margin: 0 }} />
          </span>
        </button>

        {isOpen && (
          <ul className="absolute z-10 mt-1 bg-black/50 border border-gray-500 rounded shadow w-full">
            {items?.map((option) => (
              <li
                key={option.value}
                onClick={() => select(option)}
                className={classNames(
                  "px-3 py-2 cursor-pointer flex items-center gap-2 text-white hover:bg-gray-100 hover:text-gray-900",
                  selected.value === option.value ? "bg-white/50" : ""
                )}
              >
                <span>{option.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
