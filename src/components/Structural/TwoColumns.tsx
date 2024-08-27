import styled from "styled-components";
import {JSXElementConstructor, ReactElement, ReactNode, ReactPortal} from "react";


const TwoColumnsWrapper = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr); /* Three equal columns */
    gap: 1rem; /* Optional: adds space between columns */
    padding: 0 3rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

function TwoColumns(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    return (
        <TwoColumnsWrapper>
            {props.children}
        </TwoColumnsWrapper>
    )
}

export default TwoColumns;