import HeroSection from "../Sections/HeroSection.tsx";
import PrimaryButton from "../Buttons/PrimaryButton.tsx";
import styled from "styled-components";
import NavigationSection from "../Sections/NavigationSection.tsx";

const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function NotFound() {
    return (
        <>
            <NavigationSection />
            <NotFoundWrapper>
                <PrimaryButton text={"Go back"} isLink={true}/>
                <HeroSection text={"404 Not Found"}></HeroSection>

            </NotFoundWrapper>
        </>
    );
}

export default NotFound;
