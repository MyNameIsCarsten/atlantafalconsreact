import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import styled from "styled-components";

const SmallWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: span 1; /* Spans 1 column */
`


function Small(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    return (
        <SmallWrapper>
            {props.children}
        </SmallWrapper>
    )
}

export default Small;