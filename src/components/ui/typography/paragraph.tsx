import { classNames } from "@/src/lib/styles/class-names";
import type { TypographySize, TypographyVariant } from "./types";

type ParagraphType = "span" | "p";

type ParagraphProps = {
  size?: TypographySize;
  variant?: TypographyVariant;
  type?: ParagraphType;
} & Omit<React.HTMLProps<HTMLParagraphElement>, "size">;

const sizeClassesMap: Record<TypographySize, string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

const variantClassesMap: Record<TypographyVariant, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
};

const validParagraphTags: ParagraphType[] = ["span", "p"];

const safeComponentType = (paragraphType: ParagraphType) => {
  if (!validParagraphTags.includes(paragraphType)) {
    throw new Error(
      `Invalid type prop: ${paragraphType}. Must be one of: ${validParagraphTags.join(", ")}`
    );
  }
  return paragraphType;
};

export const Paragraph: React.FC<ParagraphProps> = ({
  size,
  type = "p",
  variant = "primary",
  className: classesOverwrite,
  ...props
}) => {
  const Component = safeComponentType(type);
  return (
    <Component
      className={classNames(
        size ? sizeClassesMap[size] : "",
        variantClassesMap[variant],
        "font-base mb-2",
        classesOverwrite
      )}
      {...props}
    />
  );
};
