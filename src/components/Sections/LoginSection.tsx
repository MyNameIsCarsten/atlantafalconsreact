import styled from "styled-components";
import H2 from "../Headers/H2.tsx";
import {FONT_SIZES} from "../FONT_WEIGHTS_AND_SIZES.ts";
import {COLORS} from "../COLORS.ts";
import PrimaryButton from "../Buttons/PrimaryButton.tsx";
import React, {useState} from "react";


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
const InputCheckboxWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

const CheckboxWrapper = styled.input`
    appearance: none;  /* Remove default checkbox styling */
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid #c3ccd1;
    border-radius: 0.25rem;
    background-color: #fff;
    cursor: pointer;
    position: relative;

    &:checked {
        background-color:${COLORS.BACKGROUND}; 
        border-color: ${COLORS.PRIMARY_FONT};
    }

    &:checked::after {
        content: '';
        position: absolute;
        top: 0.1rem;
        left: 0.35rem;
        width: 0.2rem;
        height: 0.5rem;
        border: solid white;
        border-width: 0 0.2rem 0.2rem 0;
        transform: rotate(45deg);
    }
    
    &:focus {
        box-shadow:
                0 0 0 2px ${COLORS.PRIMARY_FONT}, /* Outer shadow with the first color */
                0 0 0 4px ${COLORS.UNDERSCORE_MIDDLE_COLOR }, /* Slightly smaller shadow with the second color */
                0 0 0 6px ${COLORS.BACKGROUND}; /* Innermost shadow with the third color */;
        outline: none;
        border-color: #063f61; /* Match input focus border color */
    }
`;

const SubmitWrapper = styled.div`
    display: flex;
    justify-content: center;
`;


function LoginSection() {

    const [ username, setUsername ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ keepSignedIn, setKeepSignedIn ] = useState<boolean>(false);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleKeepSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeepSignedIn(e.target.checked);
    }

    const resetForm = () => {
        setUsername('');
        setPassword('');
        setKeepSignedIn(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Submitting Username: '+ username + " Password: '" + password + ' Keep Signed in is ' +  keepSignedIn);
        resetForm();
    }

    return (
        <div>
            <H2 text={"Login"}></H2>
            <InputSectionWrapper onSubmit={handleSubmit}>
                <InputElementWrapper>
                    <LabelWrapper>Username</LabelWrapper>
                    <InputWrapper
                        onChange={handleUsernameChange}
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        autoComplete={"username"}
                        required
                    ></InputWrapper>
                </InputElementWrapper>
                <InputElementWrapper>
                    <LabelWrapper>Password</LabelWrapper>
                    <InputWrapper
                        onChange={handlePasswordChange}
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        autoComplete={"current-password"}
                        required
                    ></InputWrapper>
                </InputElementWrapper>
                <InputCheckboxWrapper>
                    <CheckboxWrapper
                        onChange={handleKeepSignInChange}
                        type="checkbox"
                        id="keepSignedIn"
                        name="keepSignedIn"
                    />
                    <LabelWrapper>Keep me signed in</LabelWrapper>
                </InputCheckboxWrapper>
                <SubmitWrapper>
                    <PrimaryButton text={"Submit"}/>
                </SubmitWrapper>
            </InputSectionWrapper>
        </div>
    )
}

export default LoginSection;