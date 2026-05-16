"use client";
import { Monogram } from "../monogram";
import Link from "next/link";
import { classNames } from "@/src/lib/styles/class-names";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "../LocaleSwitcher";
import { useTranslations } from "next-intl";

const DEFAULT_TITLE_TEXT_CLASSES = "font-queensila tracking-widest";
const DEFAULT_TEXT_CLASSES = "font-base";
const WHITE_TEXT_CLASSES = "text-avocado-light";
const GREEN_TEXT_CLASSES = "text-avocado-100";

const DEFAULT_NAV_CLASSES =
  "fixed top-0 left-0 right-0 z-50 transition-colors duration-500";
const TRANSPARENT_BG_NAV_CLASSES = "bg-blend-screen";
const WHITE_BG_NAV_CLASSES = "bg-avocado-light shadow-sm";

const DEFAULT_NAV_BUTTONS_CLASSES =
  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-500";
const DEFAULT_MOBILE_BUTTONS_CLASSES =
  "block rounded-md px-3 py-2 text-base font-medium";
const TRANSPARENT_NAV_BUTTONS_CLASSES = "text-avocado-light";
const WHITE_NAV_BUTTONS_CLASSES = "text-avocado-100";
const NAV_BUTTONS_HOVER_TRANSPARENT_CLASSES =
  "hover:bg-avocado-light hover:text-avocado-100";
const NAV_BUTTONS_HOVER_WHITE_CLASSES =
  "hover:bg-avocado-50 hover:text-avocado-light";
const ACTIVE_BUTTON = "bg-avocado-100 text-avocado-light";

const DEFAULT_HAMBURGUER_CLASSES =
  "inline-flex items-center justify-center rounded-md px-2 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset";

type NavbarProps = {
  isTrasnparent?: boolean;
};

export const Navbar = (
  { isTrasnparent }: NavbarProps = { isTrasnparent: false }
) => {
  const t = useTranslations("Navbar");

  const MENU_ITEMS = [
    { href: "/", label: t("home") },
    { href: "/gallery", label: t("galery") },
    { href: "/gifts", label: t("gifts") },
    { href: "/rsvp", label: t("rsvp") },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const textClasses = isTrasnparent ? WHITE_TEXT_CLASSES : GREEN_TEXT_CLASSES;

  const navClasses = classNames(
    DEFAULT_NAV_CLASSES,
    isTrasnparent ? TRANSPARENT_BG_NAV_CLASSES : WHITE_BG_NAV_CLASSES
  );

  const navButtonClass = isTrasnparent
    ? TRANSPARENT_NAV_BUTTONS_CLASSES
    : WHITE_NAV_BUTTONS_CLASSES;
  const navButtonHoverClass = isTrasnparent
    ? NAV_BUTTONS_HOVER_TRANSPARENT_CLASSES
    : NAV_BUTTONS_HOVER_WHITE_CLASSES;

  const monogramColor = isTrasnparent ? "white" : "green";

  return (
    <nav className={navClasses}>
      <div className="mx-auto max-w-7xl p-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className={classNames(
                DEFAULT_HAMBURGUER_CLASSES,
                isTrasnparent ? "text-white" : "text-avocado-100"
              )}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              {/* Hamburger Icon */}
              <svg
                className={`size-6 ${isOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              {/* Close Icon */}
              <svg
                className={`size-6 ${isOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-between sm:justify-between">
            <div className="w-full flex justify-center sm:justify-start sm:w-auto sm:static absolute inset-x-0 sm:inset-auto pointer-events-none">
              <Link
                href="/"
                className="flex shrink-0 items-center pointer-events-auto gap-2"
              >
                <div className="transform translate-y-[-10px]">

                <Monogram size="small" color={monogramColor} />
                </div>
                <h1
                  className={classNames(
                    "text-lg md:block hidden",
                    DEFAULT_TITLE_TEXT_CLASSES,
                    textClasses
                  )}
                >
                  Leticia {t("and")} João
                </h1>
              </Link>
            </div>

            {/* Desktop Menu - Aligned Right */}
            <div className="hidden sm:block">
              <div className="flex space-x-4 items-center">
                {MENU_ITEMS.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className={classNames(
                      DEFAULT_TEXT_CLASSES,
                      DEFAULT_NAV_BUTTONS_CLASSES,
                      navButtonClass,
                      isActive(item.href) ? ACTIVE_BUTTON : navButtonHoverClass
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Locale Switcher */}
          <div className={classNames(DEFAULT_NAV_BUTTONS_CLASSES, "text-xl")}>
            <LocaleSwitcher
              arrowClassName={
                isTrasnparent
                  ? TRANSPARENT_NAV_BUTTONS_CLASSES
                  : WHITE_NAV_BUTTONS_CLASSES
              }
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}

      <div
        className={`sm:hidden transition-all duration-300 ease-in-out z-100 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          {MENU_ITEMS.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={classNames(
                DEFAULT_TEXT_CLASSES,
                DEFAULT_MOBILE_BUTTONS_CLASSES,
                navButtonClass,
                isActive(item.href) ? ACTIVE_BUTTON : navButtonHoverClass
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {isOpen ? (
        <div
          className={classNames(
            "absolute",
            "h-screen",
            "w-screen",
            "cursor",
            "z-1",
            !isTrasnparent ? "bg-black/20" : null
          )}
          onClick={() => setIsOpen(false)}
        />
      ) : null}
    </nav>
  );
};
