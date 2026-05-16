import { classNames } from "@/src/lib/styles/class-names";
import { ReactNode } from "react";

interface PageLayoutProps {
  children?: ReactNode;
  className?: string;
}

const DEFAULT_CLASS_NAME = "bg-avocado-light py-20 px-10 md:px-30 max-w-7xl";
export const SectionLayout = ({ children, className }: PageLayoutProps) => {
  return (
    <div className="flex flex-col w-screen items-center">
      <div className={classNames(DEFAULT_CLASS_NAME, className)}>
        {children}
      </div>
    </div>
  );
}