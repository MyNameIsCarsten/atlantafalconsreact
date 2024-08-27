import styled from "styled-components";
import {JSXElementConstructor, ReactElement, ReactNode, ReactPortal} from "react";


const ThreeColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three equal columns */
    gap: 1rem; /* Optional: adds space between columns */
    padding: 0 3rem;

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

function ThreeColumns(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    return (
        <ThreeColumnsWrapper>
            {props.children}
        </ThreeColumnsWrapper>
    )
}

export default ThreeColumns;