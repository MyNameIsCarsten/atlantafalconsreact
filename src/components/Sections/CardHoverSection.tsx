import styled from "styled-components";

const ListWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

    transform-style: preserve-3d;
    transform: perspective(1000px);
`

const ItemWrapper = styled.div`
    transition: .5s;
    filter: brightness(0.2);

    &:hover {
        filter: brightness(1);
        transform: translateZ(100px);
    }

    // Targeting the adjacent sibling when the current element is hovered
    &:hover + & {
        filter: brightness(0.6);
        transform: translateZ(75px) rotateY(45deg); 
    }

    &:hover + & + & {
        filter: brightness(0.4);
        transform: translateZ(35px) rotateY(20deg); 
    }

    &:has(+ *:hover) {
        filter: brightness(0.6);
        transform: translateZ(75px) rotateY(-46deg); 
    }

    &:has(+ * + *:hover) {
        filter: brightness(0.4);
        transform: translateZ(35px) rotateY(-20deg); 
    }
  }
`

const ImgWrapper = styled.img`
    width: 10rem;
`


const CardHoverSection = () => {
  return (
    <ListWrapper>
        <ItemWrapper>
            <ImgWrapper 
                src="src\assets\graphics\playercard1.webp" 
            />
        </ItemWrapper>
        <ItemWrapper>
            <ImgWrapper 
                src="src\assets\graphics\playercard2.webp" 
            />
        </ItemWrapper>
        <ItemWrapper>
            <ImgWrapper 
                src="src\assets\graphics\playercard3.webp" 
            />
        </ItemWrapper>
        <ItemWrapper>
            <ImgWrapper 
                src="src\assets\graphics\playercard4.webp" 
            />
        </ItemWrapper>
        <ItemWrapper>
            <ImgWrapper 
                src="src\assets\graphics\playercard5.webp" 
            />
        </ItemWrapper>
    </ListWrapper>
  )
}

export default CardHoverSection
