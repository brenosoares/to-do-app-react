import styled from "styled-components";

export const ItemDetailsContainer = styled.div`
    background-color: #494949;
    border-radius: 8px;
    box-shadow: 0 0 6px #383838;
    display: block;
    margin: 20px;
    padding: 16px;
    width: 100%;
    p{
        margin-bottom: 20px;
    }
`
export const Title = styled.h2`
    color: ${props => props.theme.fontColor.light};
    font-size: 20px;
    margin-bottom: 5px;
`
interface DateTaskProps {
    past: boolean;
}

export const DateTask = styled.div<DateTaskProps>`
    color: ${props => props.past ? '#EE6554' : '#959494'};
    display: block;
    font-size: 14px;
    font-style: italic;
    margin-bottom: 5px;
`