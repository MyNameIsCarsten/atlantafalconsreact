import styled from "styled-components";
import {COLORS} from "../COLORS.ts";
import {FONT_SIZES, FONT_WEIGHTS} from "../FONT_WEIGHTS_AND_SIZES.ts";

const ImageWrapper = styled.img`
    border-radius: 0.375rem 0.375rem 0 0;
    max-width: none;
    width: 100%;
    
    &:hover {
        cursor: pointer;
    }
`

const TextHeaderWrapper = styled.div`
    background: ${COLORS.WHITE};
    color: ${COLORS.BACKGROUND};
    padding: 1rem 1.25rem 0.5rem;
    font-size: ${FONT_SIZES.BIGGER};
    font-weight: ${FONT_WEIGHTS.BOLD};
    line-height: 1.25;
`

function TextHeader ({ text, image }: { text: string, image: string }) {
    return (
        <>
            <ImageWrapper alt="image" src={image}/>
            <TextHeaderWrapper>{text}</TextHeaderWrapper>
        </>
    )
}

export default TextHeader;