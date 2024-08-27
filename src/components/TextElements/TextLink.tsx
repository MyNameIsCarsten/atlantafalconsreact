import styled from "styled-components";
import {COLORS} from "../COLORS.ts";
import {FONT_WEIGHTS} from "../FONT_WEIGHTS_AND_SIZES.ts";

export const TextLinkWrapper = styled.a`
    text-transform: uppercase;
    color: ${COLORS.PRIMARY_FONT};
    margin-right: 1rem;
    font-weight: ${FONT_WEIGHTS.BOLD};
    position: relative;
    text-decoration: none; /* Remove default underline */

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px; /* Thickness of the underline */
        background-color: ${COLORS.PRIMARY_FONT}; /* Same color as the text */
        transition: width 0.4s ease-in-out; /* Slow transition */
    }

    &:hover::after {
        width: 100%; /* Full width on hover */
    }

    &:hover {
        cursor: pointer;
    }
`;

function TextLink({ text }: { text: string }) {
    return (
        <TextLinkWrapper>
            {text}
        </TextLinkWrapper>

    )
}

export default TextLink;