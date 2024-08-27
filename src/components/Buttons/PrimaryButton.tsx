import styled from "styled-components";
import Button from "./Button.tsx";
import { COLORS } from "../COLORS.ts";
import { Link } from "react-router-dom";
import {FONT_SIZES, FONT_WEIGHTS} from "../FONT_WEIGHTS_AND_SIZES.ts";

const PrimaryButtonWrapper = styled(Button)`
        background: linear-gradient(
            120deg,
            ${COLORS.UNDERSCORE_START_COLOR} 0%,
            ${COLORS.UNDERSCORE_MIDDLE_COLOR} 45%,
            ${COLORS.WHITE} 55%,
            ${COLORS.WHITE}
        );
        background-position: 98% 0;
        background-size: 250% 100%;
        color: ${COLORS.BACKGROUND};
        transition: outline-width 0.2s;
        text-transform: uppercase;
        text-decoration: none;
        padding: 0.5rem 1rem; /* Adjust padding as needed */
        display: inline-block; /* Ensure it behaves like a button */
        cursor: pointer;

        &:hover {
                color: ${COLORS.WHITE};
                background-position: 2% 0;
        }
`;

// Apply the same styling to the PrimaryLink
const PrimaryLink = styled(Link)`
        background: linear-gradient(
                120deg,
                ${COLORS.UNDERSCORE_START_COLOR} 0%,
                ${COLORS.UNDERSCORE_MIDDLE_COLOR} 45%,
                ${COLORS.WHITE} 55%,
                ${COLORS.WHITE}
        );
        background-position: 98% 0;
        background-size: 250% 100%;
        color: ${COLORS.BACKGROUND};
        transition: outline-width 0.2s;
        text-transform: uppercase;
        text-decoration: none; /* Remove underline from link */
        padding: 0.5rem 1rem; /* Adjust padding as needed */
        display: inline-block; /* Ensure it behaves like a button */
        cursor: pointer;
        border-radius: 0.5rem;
        font-size: ${FONT_SIZES.STANDARD};
        font-style: normal;
        font-weight: ${FONT_WEIGHTS.STANDARD};
        font-family: "Rubik", sans-serif;
        
        z-index: 6;
        
        &:hover {
                color: ${COLORS.WHITE};
                background-position: 2% 0;
        }
`;

function PrimaryButton({ text, isLink }: { text: string; isLink?: boolean }) {
        if (!isLink) {
                return <PrimaryButtonWrapper>{text}</PrimaryButtonWrapper>;
        } else {
                return <PrimaryLink to="/">{text}</PrimaryLink>;
        }
}

export default PrimaryButton;
