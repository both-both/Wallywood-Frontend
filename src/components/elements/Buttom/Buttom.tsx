import type { ButtomProps } from "./Button.types";

export const Button = ({ textValue, onClick, type }: ButtomProps) => {
  return (
    <button type={type} onClick={onClick}>
      {textValue}
    </button>
  );
};
