import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {COLORS} from "../COLORS.ts";
import {FONT_SIZES} from "../FONT_WEIGHTS_AND_SIZES.ts";
import H2 from "../Headers/H2.tsx";
import '../../index.css'
import "../../assets/fonts/FalconsFont.ttf"

interface CountdownTimerProps {
    targetDate: string | Date;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const TimerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${COLORS.WHITE};
    font-size: ${FONT_SIZES.H2};
    font-family: "Rubik", sans-serif;

    @media screen and (max-width: 600px) {
        font-size: ${FONT_SIZES.H2Mobile};
    }
`


const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        let timeLeft: TimeLeft;

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            // Time's up!
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Clean up the interval on component unmount
    }, [targetDate]);

    return (
        <TimerDiv>
            <H2 text={"Next Game"}></H2>
            <div>
                {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M {timeLeft.seconds}S
            </div>
        </TimerDiv>
    );
};

export default CountdownTimer;
