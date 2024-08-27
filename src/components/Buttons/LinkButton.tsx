import styled from "styled-components";
import Button from "./Button.tsx";
import {COLORS} from "../COLORS.ts";


const LinkButtonWrapper = styled(Button)`
    background: white;
    color: ${COLORS.PRIMARY_FONT};
    transition: outline-width .2s;
    text-transform: uppercase;
        
    &:hover {
        background-color: ${COLORS.SMOOTHGREY};
    }

    text-decoration: none; /* Remove default underline */

    &::after {
        content: '';
        position: absolute;
        left: 6px;
        bottom: 5px;
        width: 0;
        height: 2px; /* Thickness of the underline */
        background: linear-gradient(
                120deg,
                ${COLORS.UNDERSCORE_START_COLOR} 0%, 
                ${COLORS.UNDERSCORE_END_COLOR}  100%, 
                ${COLORS.BACKGROUND_LIGHT} 50%,
                ${COLORS.BACKGROUND_LIGHT} 100%);
        transition: width 0.4s ease-in-out; /* Slow transition */
    }

    &:hover::after {
        width: 80%; /* Full width on hover */
    }

    &:hover {
        cursor: pointer;
    }
`;


function LinkButton ({ text }: { text: string }) {
    return <LinkButtonWrapper>{text}</LinkButtonWrapper>;
}

export default LinkButton;
