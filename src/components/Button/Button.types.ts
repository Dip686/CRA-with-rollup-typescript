import { MouseEventHandler } from "react";

export interface ButtonProps {
  type: 'primary' | 'secondary' | 'tertiary',
  text: string,
  onClick: MouseEventHandler<HTMLButtonElement>;
}