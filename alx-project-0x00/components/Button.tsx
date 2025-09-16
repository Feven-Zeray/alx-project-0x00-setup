import React from "react";

import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape, styles }) => {
  const classes =
    size === "small"
      ? "px-3 py-1 text-sm"
      : size === "medium"
      ? "px-4 py-2 text-md"
      : "px-5 py-3 text-lg";
  return (
    <>
      <button
        className={`${classes} ${shape} ${styles} bg-blue-500 text-white hover:bg-blue-700`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
