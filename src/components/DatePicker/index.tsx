import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { InputText } from './style';

interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    ref: string;
}

const Date: ForwardRefRenderFunction<HTMLInputElement, DatePickerProps> = ({ name, label, ...otherProps}, ref) => {
  return (
    <InputText>
        <label>
            {label}
            <input 
                type="date"
                {...otherProps}
                name={name}
                ref={ref}
                />
        </label>
    </InputText>
  );
};

const FormDate = React.forwardRef(Date);

export default FormDate;
