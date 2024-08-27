import styled from "styled-components";
import TextLink from "./TextLink.tsx";
import {COLORS} from "../COLORS.ts";

const TextParagraphWrapper = styled.div`
    background: ${COLORS.WHITE};
    color: ${COLORS.BACKGROUND};
    border-radius: 0 0 0.375rem 0.375rem;
    padding: 0rem 1.25rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

function TextParagraph({ text }: { text: string }) {
    return (
        <>
            <TextParagraphWrapper>
                {text}
                <div>
                    <TextLink text={"Learn More"} />
                </div>
            </TextParagraphWrapper>
        </>
    )
}

export default TextParagraph;