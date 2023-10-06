import React, { FC } from 'react';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <button type='button' className={`button-${type}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;