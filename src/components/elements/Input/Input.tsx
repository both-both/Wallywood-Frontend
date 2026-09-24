import { forwardRef } from "react";
import { InputStyled } from "./Input.styled";
import type { InputProps } from "./Input.types";

// forwardRef sender ref videre ned til det rigtige input
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, type, name, placeholder, onChange, onBlur, value }, ref) => {
    return (
      <InputStyled
        ref={ref}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    );
  },
);
