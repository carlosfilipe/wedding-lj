import { classNames } from '@/src/lib/styles/class-names';
import { ReactNode } from 'react';

type ButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  style?: "outline" | "filled";
};

const DEFAULT_BUTTON_CLASSES =
  "text-sm cursor-pointer rounded-lg p-2 font-medium";
const BUTTON_FILLED_HOVER_CLASSES = "hover:bg-avocado-50 hover:text-avocado-light";
const BUTTON_FILLED_CLASSES = "bg-avocado-100 text-avocado-light shadow-md"
const BUTTON_TRANSITION_CLASSES = "transition-colors duration-500";
const BUTTON_OUTLINE_CLASSES = "border-2 border-avocado-100 text-avocado-100";

export const Button = ({
  onClick,
  children,
  className,
  style = "filled",
}: ButtonProps) => {

  const buttonStyleClasses =
    style === "filled"
      ? classNames(BUTTON_FILLED_CLASSES, BUTTON_FILLED_HOVER_CLASSES)
      : BUTTON_OUTLINE_CLASSES;

  return (
    <div
      onClick={onClick}
      className={classNames(
        DEFAULT_BUTTON_CLASSES,
        BUTTON_TRANSITION_CLASSES,
        buttonStyleClasses,
        className
      )}
    >
      {children}
    </div>
  )
}