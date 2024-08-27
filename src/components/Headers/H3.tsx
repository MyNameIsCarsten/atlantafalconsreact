import styled from "styled-components";
import {COLORS} from "../COLORS.ts";
import {FONT_SIZES, FONT_WEIGHTS} from "../FONT_WEIGHTS_AND_SIZES.ts";

const H3Wrapper = styled.h2`
    font-size: ${FONT_SIZES.STANDARD};;
    text-transform: uppercase;
    font-weight: ${FONT_WEIGHTS.BOLD};
    line-height: 21px;
    color: ${COLORS.WHITE};
    text-align: left;
    margin-bottom: 0;
`

function H3 ({ text }: { text: string }) {
    return (
        <H3Wrapper>{text}</H3Wrapper>
    );
}

export default H3;