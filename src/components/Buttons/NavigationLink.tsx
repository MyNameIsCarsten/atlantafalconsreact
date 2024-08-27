import styled from "styled-components";
import {COLORS} from "../COLORS.ts";
import {FONT_SIZES, FONT_WEIGHTS} from "../FONT_WEIGHTS_AND_SIZES.ts";
import {Link} from "react-router-dom";

const NavigationLinkWrapper = styled(Link)`
    align-items: center;
    border: .125rem solid transparent;
    border-radius: .5rem;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font-size: ${FONT_SIZES.STANDARD};;
    height: 2.5rem;
    padding: .75rem 1rem;
    text-transform: uppercase;
    color: ${COLORS.WHITE};
    outline: 0 solid ${COLORS.PRIMARY_FONT};
    outline-offset: .125rem;
    transition: all .2s;
    font-weight: ${FONT_WEIGHTS.STANDARD};
    text-decoration: none;
    &:hover {
        background-color: ${COLORS.PRIMARY_FONT};
    }
`;


function NavigationLink ({ text, to }: { text: string, to: string }) {
    return <NavigationLinkWrapper to={to}>{text}</NavigationLinkWrapper>;
}

export default NavigationLink;
