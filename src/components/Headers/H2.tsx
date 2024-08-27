import styled from "styled-components";
import {COLORS} from "../COLORS.ts";
import {FONT_SIZES, FONT_WEIGHTS} from "../FONT_WEIGHTS_AND_SIZES.ts";

const H2Wrapper = styled.h1`
    font-size: ${FONT_SIZES.H2};
    line-height: 1.25;
    font-weight: ${FONT_WEIGHTS.STANDARD};;
    text-align: center;
    color: ${COLORS.WHITE};
    font-family: FalconsFont;
    word-wrap: anywhere;

    @media screen and (max-width: 600px) {
        font-size: ${FONT_SIZES.H2Mobile};
    }
`

function H2 ({ text }: { text: string }) {
    return (
        <H2Wrapper>{text}</H2Wrapper>
    );
}

export default H2;