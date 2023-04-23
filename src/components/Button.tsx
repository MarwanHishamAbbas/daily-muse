"use client";

import React, { FC } from "react";
import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva("bg-[#7F56D9]", {
  variants: {
    variant: {
      default: "",
      ghost: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({}) => {
  return (
    <button
      className={buttonVariants({
        variant: "default",
        className: "text-white p-2 rounded-md ",
      })}
    >
      Custom Button
    </button>
  );
};

export default Button;
