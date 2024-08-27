import styled from "styled-components";
import {COLORS} from "../COLORS.ts";
import {FONT_SIZES} from "../FONT_WEIGHTS_AND_SIZES.ts";

const H4Wrapper = styled.h3`
    font-size: ${FONT_SIZES.H4};
    line-height: 1.25;
    font-weight: 700;
    color: ${COLORS.WHITE};
    text-align: left;
    margin-bottom: 2rem;
    margin-top: 0;
`

function H4 ({ text }: { text: string }) {
    return (
        <H4Wrapper>{text}</H4Wrapper>
    );
}

export default H4;