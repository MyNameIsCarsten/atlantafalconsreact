import HeroSection from "../Sections/HeroSection.tsx";
import H2 from "../Headers/H2.tsx";
import PrimaryButton from "../Buttons/PrimaryButton.tsx";
import StandardButton from "../Buttons/StandardButton.tsx";
import NavigationLink from "../Buttons/NavigationLink.tsx";
import LinkButton from "../Buttons/LinkButton.tsx";
import StrokeSpacer from "../Structural/StrokeSpacer.tsx";
import {COLORS} from "../COLORS.ts";
import ThreeColumns from "../Structural/ThreeColumns.tsx";
import Small from "../Structural/Small.tsx";
import H3 from "../Headers/H3.tsx";
import H4 from "../Headers/H4.tsx";
import ImageHeader from "../TextElements/ImageHeader.tsx";
import playerImage1 from "../../assets/graphics/player (1).webp";
import TextParagraph from "../TextElements/TextParagraph.tsx";
import playerImage3 from "../../assets/graphics/player (3).webp";
import playerImage2 from "../../assets/graphics/player (2).webp";
import TwoColumns from "../Structural/TwoColumns.tsx";
import NewsletterSection from "../Sections/NewsletterSection.tsx";
import LoginSection from "../Sections/LoginSection.tsx";
import BigSmall from "../Structural/BigSmallCombination.tsx";
import Big from "../Structural/Big.tsx";
import TextHeader from "../TextElements/TextHeader.tsx";
import styled from "styled-components";
import NavigationSection from "../Sections/NavigationSection.tsx";

const ButtonSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 2em;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const Card = styled.div`
    transition: transform .2s;
    background: ${COLORS.WHITE};
    border-radius: 6px;
    outline: none;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
        box-shadow: ${COLORS.PRIMARY_FONT} 0px 5px 20px 0px;
        outline: 2px solid ${COLORS.PRIMARY_FONT};
    }`

function Home() {
    return (
        <>
            <NavigationSection />
            <HeroSection text={"Rise Up!"}/>
            <H2 text={"Buttons & Links"}/>
            <ButtonSection>
                <PrimaryButton text={"Primary"}/>
                <StandardButton text={"Standard"}/>
                <NavigationLink text={"Navigation"}/>
                <LinkButton text={"Link"}/>
            </ButtonSection><StrokeSpacer fillColor={COLORS.GREY}/><H2 text={"Three Image Elements"}/><ThreeColumns>
                <Small>
                    <H3 text={"Element"}/>
                    <H4 text={"Small Image Element"}/>
                    <Card>
                        <ImageHeader text={"Random Header"} image={playerImage1}/>
                        <TextParagraph
                            text={"The Atlanta Falcons, an NFL team based in Atlanta, Georgia, compete in the NFC South division. Founded in 1965, the team has reached the Super Bowl twice, known for their passionate fan base and dynamic players. The Falcons' iconic red, black, and white colors represent their fierce spirit on the field."}/>
                    </Card>
                </Small>
                <Small>
                    <H3 text={"Element"}/>
                    <H4 text={"Small Image Element"}/>
                    <Card>
                        <ImageHeader text={"Random Header"} image={playerImage3}/>
                        <TextParagraph
                            text={"The Atlanta Falcons, an NFL team based in Atlanta, Georgia, compete in the NFC South division. Founded in 1965, the team has reached the Super Bowl twice, known for their passionate fan base and dynamic players. The Falcons' iconic red, black, and white colors represent their fierce spirit on the field."}/>
                    </Card>
                </Small>
                <Small>
                    <H3 text={"Element"}/>
                    <H4 text={"Small Image Element"}/>
                    <Card>
                        <ImageHeader text={"Random Header"} image={playerImage2}/>
                        <TextParagraph
                            text={"The Atlanta Falcons, an NFL team based in Atlanta, Georgia, compete in the NFC South division. Founded in 1965, the team has reached the Super Bowl twice, known for their passionate fan base and dynamic players. The Falcons' iconic red, black, and white colors represent their fierce spirit on the field."}/>
                    </Card>
                </Small>
            </ThreeColumns><StrokeSpacer fillColor="#ffffff"/><TwoColumns>
                <NewsletterSection/>
                <LoginSection/>
            </TwoColumns><StrokeSpacer fillColor={COLORS.WHITE}/><H2 text={"Big & Small Elements"}/><BigSmall>
                <Big>
                    <H3 text={"Element"}/>
                    <H4 text={"Big Text Element"}/>
                    <TextHeader text={"A Team Full Of Pride"}/>
                    <TextParagraph
                        text={"The Atlanta Falcons, an NFL team based in Atlanta, Georgia, compete in the NFC South division. Founded in 1965, the team has reached the Super Bowl twice, known for their passionate fan base and dynamic players. The Falcons' iconic red, black, and white colors represent their fierce spirit on the field."}/>
                </Big>
                <Small>
                    <H3 text={"Element"}/>
                    <H4 text={"Small Text Element"}/>
                    <TextHeader text={"A Team Full Of Pride"}/>
                    <TextParagraph
                        text={"The Atlanta Falcons, an NFL team based in Atlanta, Georgia, compete in the NFC South division. Founded in 1965, the team has reached the Super Bowl twice, known for their passionate fan base and dynamic players. The Falcons' iconic red, black, and white colors represent their fierce spirit on the field."}/>
                </Small>
            </BigSmall>
        </>
    );
}

export default Home;