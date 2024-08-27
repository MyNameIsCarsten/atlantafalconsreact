import styled from "styled-components";
import {JSXElementConstructor, ReactElement, ReactNode, ReactPortal} from "react";


const BigSmallWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three equal columns */
    gap: 1rem; /* Optional: adds space between columns */
    padding: 0 3rem;

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

function BigSmall(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    return (
        <BigSmallWrapper>
            {props.children}
        </BigSmallWrapper>
    )
}

export default BigSmall;