import styled from 'styled-components';

interface IButtonProps {
    color?: string;
}

export const ButtonStyle = styled.button<IButtonProps>`
    border-radius: 4px;
    border: 0px;
    box-shadow: 0 0 6px #383838;
    cursor: pointer;
    font-size: 16px;
    padding: 15px 30px;
    ${props => props.color === 'primary' && `
        background-color: ${props.theme.palette.primary.main};
        color: ${props.theme.palette.primary.contrastText};
        `}
    ${props => props.color === 'secondary' && `
        background-color: ${props.theme.palette.secondary.main};
        color: ${props.theme.palette.secondary.contrastText};
    `}
    :hover {
        ${props => props.color === 'primary' && `
            background-color: #0071CE;
        `}
        ${props => props.color === 'secondary' && `
            background-color: #4EBE9C;
        `}
    }
`