import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";
import { cn } from "@/lib/utils";

export const paragraphVariants = cva("text-purple-500 mb-2 text-center", {
  variants: {
    size: {
      default: "text-base sm:text-lg",
      sm: "text-sm sm:text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph: FC<ParagraphProps> = ({
  className,
  size,
  children,
  ...props
}) => {
  return (
    <p {...props} className={cn(paragraphVariants({ size, className }))}>
      {children}
    </p>
  );
};

export default Paragraph;
