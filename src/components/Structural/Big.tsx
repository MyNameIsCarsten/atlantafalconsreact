import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import styled from "styled-components";

const BigWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: span 2; /* Spans 2 columns */
`


function Big(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    return (
        <BigWrapper>
            {props.children}
        </BigWrapper>
    )
}

export default Big;