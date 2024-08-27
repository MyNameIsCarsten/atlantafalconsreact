import styled from "styled-components";
import {TextLinkWrapper} from "../TextElements/TextLink.tsx";
import {COLORS} from "../COLORS.ts";
import {FONT_SIZES, FONT_WEIGHTS} from "../FONT_WEIGHTS_AND_SIZES.ts";

const LinkSectionWrapper = styled.div`
    display: grid;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr); /* Three equal columns */
    gap: 1rem; /* Optional: adds space between columns */
    background-color: ${COLORS.WHITE};
    padding: 0 3rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const LinkColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const LinkUlWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const LinkH3 = styled.h3`
    color: ${COLORS.BACKGROUND};
    font-size: ${FONT_SIZES.BIG};
    margin-bottom: 0.5rem;
    line-height: 1.25;
    font-weight: ${FONT_WEIGHTS.STANDARD};
`

const LinkSpanWrapper = styled.span`
    transform: translateX(-2.5rem);
`

const SingleLinkWrapper = styled(TextLinkWrapper)`
    font-weight: ${FONT_WEIGHTS.THIN};
`


function LinkSection() {
    return (
        <>
            <LinkSectionWrapper>
                <LinkColumnWrapper>
                    <LinkH3>Stadium</LinkH3>
                    <LinkUlWrapper>
                        <LinkSpanWrapper>
                            <SingleLinkWrapper>Tickets</SingleLinkWrapper>
                        </LinkSpanWrapper>
                        <LinkSpanWrapper>
                            <SingleLinkWrapper>Seats</SingleLinkWrapper>
                        </LinkSpanWrapper>
                        <LinkSpanWrapper>
                            <SingleLinkWrapper>Parking</SingleLinkWrapper>
                        </LinkSpanWrapper>
                    </LinkUlWrapper>
                </LinkColumnWrapper>
                <LinkColumnWrapper>
                    <LinkH3>Team</LinkH3>
                    <LinkUlWrapper>
                        <LinkSpanWrapper>
                            <SingleLinkWrapper>Blog</SingleLinkWrapper>
                        </LinkSpanWrapper>
                        <LinkSpanWrapper>
                            <SingleLinkWrapper>History</SingleLinkWrapper>
                        </LinkSpanWrapper>
                        <LinkSpanWrapper>
                            <SingleLinkWrapper>Careers</SingleLinkWrapper>
                        </LinkSpanWrapper>
                    </LinkUlWrapper>
                </LinkColumnWrapper>
                <LinkColumnWrapper>
                    <LinkH3>Information</LinkH3>
                    <LinkUlWrapper>
                        <LinkSpanWrapper>
                            <SingleLinkWrapper>Privacy</SingleLinkWrapper>
                        </LinkSpanWrapper>
                        <LinkSpanWrapper>
                            <SingleLinkWrapper>Terms</SingleLinkWrapper>
                        </LinkSpanWrapper>
                        <LinkSpanWrapper>
                            <SingleLinkWrapper>Support</SingleLinkWrapper>
                        </LinkSpanWrapper>
                    </LinkUlWrapper>
                </LinkColumnWrapper>
            </LinkSectionWrapper>
        </>
    )
}

export default LinkSection;