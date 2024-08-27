import styled from "styled-components";
import {COLORS} from "../COLORS.ts";
import {FONT_SIZES, FONT_WEIGHTS} from "../FONT_WEIGHTS_AND_SIZES.ts";

const H1Wrapper = styled.h1`
    font-size: ${FONT_SIZES.H1};
    line-height: 1.25;
    font-weight: ${FONT_WEIGHTS.STANDARD};;
    text-align: center;
    color: ${COLORS.WHITE};
    font-family: FalconsFont;
    margin-bottom: 1rem;
    padding: 0 1rem;

    @media screen and (max-width: 600px) {
        font-size: ${FONT_SIZES.H1Mobile};
    }
`

function H1 ({ text }: { text: string }) {
    return (
        <H1Wrapper>{text}</H1Wrapper>
    );
}

export default H1;