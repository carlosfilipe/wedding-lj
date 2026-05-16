import { classNames } from "@/src/lib/styles/class-names";
import type { TypographyVariant } from "./types";

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  variant?: TypographyVariant;
  type?: HeadingType;
} & Omit<React.HTMLProps<HTMLParagraphElement>, "size">;

const variantClassesMap: Record<TypographyVariant, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
};

const validParagraphTags: HeadingType[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

const safeComponentType = (headingType: HeadingType) => {
  if (!validParagraphTags.includes(headingType)) {
    throw new Error(
      `Invalid type prop: ${headingType}. Must be one of: ${validParagraphTags.join(", ")}`
    );
  }
  return headingType;
};

const sizeClassesMap: Record<HeadingType, string> = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
};

const spacingClassesMap: Record<HeadingType, string> = {
  h1: "mb-6",
  h2: "mb-5",
  h3: "mb-4",
  h4: "mb-3",
  h5: "mb-2",
  h6: "mb-1",
};

export const Heading: React.FC<HeadingProps> = ({
  type = "h1",
  variant = "primary",
  className: defaultClassName,
  ...props
}) => {
  const Component = safeComponentType(type);
  return (
    <Component
      className={classNames(
        variantClassesMap[variant],
        sizeClassesMap[type],
        spacingClassesMap[type],
        "font-base",
        defaultClassName
      )}
      {...props}
    />
  );
};
