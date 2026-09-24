import { forwardRef } from "react";
import { TextareaStyled } from "./Textarea.styled";
import type { TextareaProps } from "./Textarea.types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, name, placeholder, rows, onChange, onBlur, value }, ref) => {
    return (
      <TextareaStyled
        ref={ref}
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    );
  },
);
