import { FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("text-[#101828] text-center font-extrabold ", {
  variants: {
    size: {
      default: "text-4xl md:text-5xl lg:text-6xl",
      lg: "text-5xl md:text-6xl lg:text-7xl",
      sm: "text-2xl md:text-3xl lg:text-4xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading: FC<LargeHeadingProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  );
};

export default LargeHeading;
