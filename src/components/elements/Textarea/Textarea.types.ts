import type { ChangeEvent, FocusEvent } from "react";

export type TextareaProps = {
  id?: string;
  name: string;
  placeholder?: string;
  rows?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  value?: string;
};
