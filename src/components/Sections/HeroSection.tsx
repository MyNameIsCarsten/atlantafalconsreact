import styled from "styled-components";
import H1 from "../Headers/H1.tsx";
import heroBanner from '/src/assets/graphics/hero-banner.webp';
import CountdownTimer from "../Timer/CountdownTimer.tsx";

const HeroWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${heroBanner}) no-repeat center center/cover;
    position: relative;

    margin-top: -1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, 0.6);
        box-shadow: inset 120px 100px 250px #000000, inset -120px -100px 250px #000000;
    }

    @media screen and (max-width: 600px) {
        height: auto;
    }
`

const HeroContent = styled.div`
    position: relative;
    z-index: 2; /* Ensures the content is above the overlay */
`;

function HeroSection ({ text }: { text: string }) {

    // Calculate the target date (1 day from the current time)
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // Add 24 hours in milliseconds



    return (
        <HeroWrapper>
            <HeroContent>
                <H1 text={text} />
                <CountdownTimer targetDate={targetDate.toISOString()}/>
            </HeroContent>
        </HeroWrapper>
    )
}

export default HeroSection;