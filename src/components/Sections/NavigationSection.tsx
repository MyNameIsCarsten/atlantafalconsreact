import styled from "styled-components";
import NavigationLink from "../Buttons/NavigationLink.tsx";
import { COLORS } from "../COLORS.ts";
import logo from '/src/assets/graphics/logo-transparent.png';
import { Link } from 'react-router-dom';

const NavigationWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: ${COLORS.BACKGROUND};
    padding: 1rem 0;
    align-items: center;

    @media screen and (max-width: 400px) {
        display: grid;
        justify-content: center;
        justify-items: center;
        align-items: center;
        grid-template-columns: repeat(2, 1fr);
    }
`

const LogoWrapper = styled.img`
    height: 5rem;
    width: 5rem;
    padding-top: 1rem;
    cursor: pointer;
    transition: all 1s ease;

    &:hover {
        transform: scale(1.2); /* Scale up the logo */
    }
`

const LogoLink = styled(Link)`
    @media screen and (max-width: 400px) {
        display: none;
    }
`

function NavigationSection() {
    return (
        <NavigationWrapper>
            <LogoLink to="/">
                <LogoWrapper src={logo} alt="Atlanta Falcons Logo" />
            </LogoLink>
            <NavigationLink to="/tickets" text={"Tickets"} />
            <NavigationLink to="/schedule" text={"Schedule"} />
            <NavigationLink to="/roster" text={"Roster"} />
            <NavigationLink to="/statistics" text={"Statistics"} />
        </NavigationWrapper>
    )
}

export default NavigationSection;
