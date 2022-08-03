import React, { ForwardRefRenderFunction } from 'react';
import { ButtonStyle } from './style';

export interface ButtonProps {
    text: string,
    color?: string,
    ref:string,
    onClick: (e: React.MouseEvent) => void,
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({ text,color, ...otherProps}, ref) => {

    return (
      <ButtonStyle color={color} {...otherProps} ref={ref}>
        {text}
      </ButtonStyle>
    );
  
}

const FormButton = React.forwardRef(Button);

export default FormButton;
