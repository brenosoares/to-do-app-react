import styled from "styled-components";

export const TextAreaStyle = styled.div`
    width: 100%;
    label {
        color: ${props => props.theme.fontColor.light};
        display: flex;
        font-size: 14px;
        flex-flow: column;
        textarea{
            appearance: none;
            background-color: #DCDDE0;
            border-radius: 4px;
            font-family: Arial, Helvetica, sans-serif;
            margin: 10px 0;
            padding: 10px;
            width: 100%;
        }
    }
`