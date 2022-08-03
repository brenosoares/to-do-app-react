import styled from "styled-components";

export const InputText = styled.div`
    width: 100%;
    label {
        color: ${props => props.theme.fontColor.light};
        display: flex;
        font-size: 14px;
        flex-flow: column;
        input{
            appearance: none;
            background-color: #DCDDE0;
            border-radius: 4px;
            margin: 10px 0;
            padding: 10px;
            width: 100%;
        }
    }
`