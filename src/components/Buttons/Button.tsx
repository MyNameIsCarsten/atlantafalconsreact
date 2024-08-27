import styled from "styled-components";
import {FONT_SIZES, FONT_WEIGHTS} from "../FONT_WEIGHTS_AND_SIZES.ts";

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    border-radius: 0.5rem;
    transition: background-position 0.2s linear;
    align-items: center;
    font-size: ${FONT_SIZES.STANDARD};
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.STANDARD};;
    font-family: "Rubik", sans-serif;
    position: relative;
    border: none;
    padding: .75rem 1rem;
`;

export default Button;
