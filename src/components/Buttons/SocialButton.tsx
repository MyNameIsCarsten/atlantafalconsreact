import styled from "styled-components";
import Button from "./Button.tsx";
import {COLORS} from "../COLORS.ts";

const SocialSvgWrapper = styled.svg`
    height: 1em;
    width: 1em;
`

const SocialButtonWrapper = styled(Button)`
    background: ${COLORS.WHITE};
    color: ${COLORS.PRIMARY_FONT};
    transition: outline-width .2s;
    text-transform: uppercase;
    display: flex;
    align-content: center; 
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    gap: 0.5em;
        
    &:hover {
        background-color: ${COLORS.SMOOTHGREY};
    }

    text-decoration: none; /* Remove default underline */

    &::after {
        content: '';
        position: absolute;
        left: 6px;
        bottom: 5px;
        width: 0;
        height: 2px; /* Thickness of the underline */
        background: linear-gradient(
                120deg, 
                ${COLORS.UNDERSCORE_START_COLOR} 0%, 
                ${COLORS.UNDERSCORE_END_COLOR}  100%, 
                rgba(173, 108, 170, 0.3) 50%, 
                rgba(173, 108, 170, 0.3) 100%);
        transition: width 0.4s ease-in-out; /* Slow transition */
    }

    &:hover::after {
        width: 80%; /* Full width on hover */
    }

    &:hover {
        cursor: pointer;
    }
`;


function SocialButton ({ text }: { text: string }) {
    return (
        <SocialButtonWrapper>
            <SocialSvgWrapper aria-hidden="true" className="css-35hz2d e1of9yu14" viewBox="0 0 16 16" version="1.1">
                <path
                    d="M16,3a6.56,6.56,0,0,1-1.89.52,3.29,3.29,0,0,0,1.44-1.82,6.57,6.57,0,0,1-2.08.8,3.3,3.3,0,0,0-5.59,3A9.32,9.32,0,0,1,1.11,2.1a3.32,3.32,0,0,0,1,4.38A3.27,3.27,0,0,1,.64,6.07,3.32,3.32,0,0,0,3.28,9.33a3.32,3.32,0,0,1-1.48.06,3.29,3.29,0,0,0,3.07,2.28A6.66,6.66,0,0,1,0,13a9.48,9.48,0,0,0,10.71-.39,9.61,9.61,0,0,0,3.65-7.9A6.67,6.67,0,0,0,16,3C15.41,3.3,15.56,3.7,16,3Z"
                    fill="currentColor"></path>
            </SocialSvgWrapper>
            {text}
        </SocialButtonWrapper>
    );
}

export default SocialButton;
