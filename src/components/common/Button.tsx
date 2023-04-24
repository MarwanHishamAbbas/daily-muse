"use client";

import React, { FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva(
  "text-white text-sm flex items-center gap-2 rounded-md transition-colors px-5 py-3 disabled:opacity-50 disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        default: "bg-violet-600 hover:bg-violet-500",
        ghost:
          "hover:underline underline-offset-4 transition-all text-[#101828]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  className,
  isLoading,

  ...props
}) => {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={cn(buttonVariants({ variant, className }))}
    >
      {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
      {children}
    </button>
  );
};

export default Button;
