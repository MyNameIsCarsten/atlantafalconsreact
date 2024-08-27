import styled from "styled-components";
import H2 from "../Headers/H2.tsx";
import {FONT_SIZES} from "../FONT_WEIGHTS_AND_SIZES.ts";
import {COLORS} from "../COLORS.ts";
import React, {useState} from "react";
import StandardButton from "../Buttons/StandardButton.tsx";


const InputSectionWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const InputElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`

const LabelWrapper = styled.label`
    margin-left: 0.5rem;
    color: #ffffff;
`;

const InputWrapper = styled.input`
    border-radius: .66rem;
    font-size: ${FONT_SIZES.STANDARD};;
    padding: .6rem .75rem;
    border: 2px solid #c3ccd1;
    width: 30rem;
    transition: all 0.3s ease, height 0s, padding 0s;
    
    &:hover {
        border-color: #5c7889;
    }
    
    &:focus {
        border-color: #063f61;
        box-shadow:
                0 0 0 2px ${COLORS.PRIMARY_FONT}, /* Outer shadow with the first color */
                0 0 0 4px ${COLORS.UNDERSCORE_MIDDLE_COLOR }, /* Slightly smaller shadow with the second color */
                0 0 0 6px ${COLORS.BACKGROUND}; /* Innermost shadow with the third color */;
        outline: none;
    }

    @media screen and (max-width: 400px) {
        width: auto;
    }
`

const SubmitWrapper = styled.div`
    display: flex;
    justify-content: center;
`;


function NewsletterSection() {

    const [ email, setEmail ] = useState<string>('');

    const handleEMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }


    const resetForm = () => {
        setEmail('');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Signed Up With: '+ email);
        resetForm();
    }

    return (
        <div>
            <H2 text={"Newsletter Sign-Up"}></H2>
            <InputSectionWrapper onSubmit={handleSubmit}>
                <InputElementWrapper>
                    <LabelWrapper>E-Mail</LabelWrapper>
                    <InputWrapper
                        onChange={handleEMailChange}
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        required
                    ></InputWrapper>
                </InputElementWrapper>
                <SubmitWrapper>
                    <StandardButton text={"Sign Up"}/>
                </SubmitWrapper>
            </InputSectionWrapper>
        </div>
    )
}

export default NewsletterSection;