import styled from "styled-components";
import Button from "./Button.tsx";
import {COLORS} from "../COLORS.ts";


const StandardButtonWrapper = styled(Button)`
    background: linear-gradient(
            120deg, 
            ${COLORS.UNDERSCORE_START_COLOR} 0%,
            ${COLORS.UNDERSCORE_MIDDLE_COLOR}  45%, 
            ${COLORS.BACKGROUND_LIGHT} 50%,
            ${COLORS.BACKGROUND_LIGHT} 100%);
    background-position: 100% 100%;
    background-size: 250% 100%;
    color: ${COLORS.WHITE};

    &:hover {
        background-position: 0 0;
    }
`;



function StandardButton ({ text }: { text: string }) {
    return <StandardButtonWrapper>{text}</StandardButtonWrapper>;
}

export default StandardButton;
