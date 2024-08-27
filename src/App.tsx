import styled from "styled-components";
import StrokeSpacer from "./components/Structural/StrokeSpacer.tsx";
import FooterSection from "./components/Sections/FooterSection.tsx";
import {COLORS} from "./components/COLORS.ts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Routes/Home.tsx";
import NotFound from "./components/Routes/NotFound.tsx";


const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

function App() {
    return (
        <>
            <AppWrapper>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
                <StrokeSpacer fillColor={COLORS.LIGHTGREY}/>
                <FooterSection />
            </AppWrapper>
        </>
    );
}

export default App;
