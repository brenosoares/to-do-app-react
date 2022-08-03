import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { InputText } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    ref: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...otherProps}, ref) => {
  return (
    <InputText>
        <label>
            {label}
            <input 
                type="text"
                {...otherProps}
                name={name}
                ref={ref}
                />
        </label>
    </InputText>
  );
};

const FormInput = React.forwardRef(Input);

export default FormInput;
