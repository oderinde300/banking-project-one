import React from "react";

const Button = ({
  text = "text",
  bg = "#0D417F",
  color = "#FFFFFF",
  px = 5,
  py = 5,
  border,
  borderColor = "white",
}) => {
  return (
    <button
      className={`bg-[${bg}] text-[${color}] ${
        border && border
      } border-[${borderColor}] px-${px} py-${py} cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
