import styled from "styled-components";
import SocialButton from "../Buttons/SocialButton.tsx";
import LinkSection from "./LinkSection.tsx";
import StrokeSpacer from "../Structural/StrokeSpacer.tsx";
import {COLORS} from "../COLORS.ts";
import {FONT_SIZES, FONT_WEIGHTS} from "../FONT_WEIGHTS_AND_SIZES.ts";

const FooterDiv = styled.div`
    background: ${COLORS.WHITE};
`

const FooterSectionWrapper = styled.footer`
    background-color: ${COLORS.WHITE};
    padding: 1rem 3rem;

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
    }
`

const SocialWrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 600px) {
        align-items: center;
        align-content: center;
    }
`

const TrademarkWrapper = styled.div`
    color: ${COLORS.PRIMARY_FONT};
    text-transform: uppercase;
    font-size: ${FONT_SIZES.STANDARD};;
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1em;
    line-height: 1.25;
    align-items: center;
    display: flex;
    font-weight: ${FONT_WEIGHTS.BOLD};

    @media screen and (max-width: 600px) {
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }
`

function FooterSection() {
    return (
        <FooterDiv>
            <LinkSection/>
            <StrokeSpacer fillColor={COLORS.LIGHTGREY} />
            <FooterSectionWrapper>
                <SocialWrapper>
                    <SocialButton text="Atlanta Falcons" />
                </SocialWrapper>
                <TrademarkWrapper>© 2024 • Atlanta Falcons IS A REGISTERED TRADEMARK</TrademarkWrapper>
            </FooterSectionWrapper>
        </FooterDiv>
    )
}

export default FooterSection;

