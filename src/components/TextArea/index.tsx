import React, { ForwardRefRenderFunction, TextareaHTMLAttributes } from 'react';
import { TextAreaStyle } from './style';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
    ref: string;
}

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({ name, label, ...otherProps}, ref) => {
  return (
    <TextAreaStyle>
        <label>
            {label}
            <textarea {...otherProps} name={name} ref={ref}></textarea>
        </label>
    </TextAreaStyle>
  );
};

const FormTextArea = React.forwardRef(TextArea);

export default FormTextArea;
