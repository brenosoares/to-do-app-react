import styled, { keyframes } from 'styled-components';

export const SectionList = styled.section`
    align-items: stretch;
    background-color: #494949;
    border-radius: 8px;
    box-shadow: 0 0 6px #383838;
    display: flex;
    justify-content: space-between;
    margin: 20px;
    padding: 16px;
`

export const DisplayList = styled.ul`
    display: block;
    list-style: none;
    margin-right: 8px;
    width: 50%;
`
export const CreateItem = styled.div`
    border: 1px solid #565656;
    border-radius: 4px;
    display: block;
    list-style: none;
    margin-left: 8px;
    padding: 16px;
    width: 50%;
`
export const ListItem = styled.li`
    border: 1px solid #565656;
    border-radius: 4px;
    color: ${props => props.theme.fontColor.light};
    display: block;
    margin-bottom: 16px;
    padding: 10px 20px;
    position: relative;
    width: 100%;
    :hover {
        background-color: #525252;
    }

`
export const Title = styled.h2`
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
const trashFrame = keyframes`
    0%   { transform: rotate(0deg); }
    10%  { transform: rotate(-10deg);}
    20%  { transform: rotate(10deg); }
    30%  { transform: rotate(0deg); }
    40%  { transform: rotate(10deg); }
    50%  { transform: rotate(-10deg);}
    60%  { transform: rotate(0deg); }
    70%  { transform: rotate(-10deg);}
    80%  { transform: rotate(10deg); }
    90%  { transform: rotate(0deg); }
    100% { transform: rotate(-10deg);}
`
export const Trash = styled.div`
    align-items: center;
    background-color: ${props => props.theme.palette.warning.main};
    border-radius: 50px;
    display: flex;
    height: 24px;
    justify-content: center;
    position: absolute;
    overflow: hidden;
    top: 16px;
    right: 16px;
    width: 24px;
    img {
        width: 16px;
    }
    :hover{
        cursor: pointer;
        height: 28px;
        top: 14px;
        right: 14px;
        width: 28px;
        img{
            animation: ${trashFrame} 0.5s ;
        }
    }
`
