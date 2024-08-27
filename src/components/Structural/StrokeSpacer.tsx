import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid'; // Import UUID library

const StrokeSpacerWrapper = styled.div`
    padding: 0 3rem;
`;

interface StrokeSpacerProps {
    fillColor: string;
    backgroundColor?: string;
}

function StrokeSpacer({ fillColor, backgroundColor = "transparent" }: StrokeSpacerProps) {  // Default background color is transparent
    const patternId = `line-${uuidv4()}`; // Generate a unique ID for each instance

    return (
        <StrokeSpacerWrapper>
            <svg width="100%" height="8" aria-hidden="true">
                <defs>
                    <pattern id={patternId} x="0" y="0" width="15" height="8" patternUnits="userSpaceOnUse">
                        <path
                            d="M15 5.9c-3.8 0-3.8-4.4-7.5-4.4S3.7 5.9 0 5.9"
                            fill="none"
                            stroke={fillColor}
                            strokeWidth="3"
                            strokeMiterlimit="10"
                        />
                    </pattern>
                </defs>
                {/* Apply background color */}
                <rect x="0" y="0" width="100%" height="8" fill={backgroundColor} />
                <rect x="0" y="0" width="100%" height="8" fill={`url(#${patternId})`} />
            </svg>
        </StrokeSpacerWrapper>
    );
}

export default StrokeSpacer;
