import React, { useState } from "react";
import AboutMe from "./AboutMe";

const App = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [buttonText, setButtonText] = useState("Click the button to view personal info");

    const handleButtonClick = () => {
        setShowInfo(!showInfo);
        setButtonText(showInfo ? "Click the button to view personal info" : "Click the button to hide the data");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>{buttonText}</h2>
            <button onClick={handleButtonClick}>Toggle Data</button>
            {showInfo && <AboutMe />}
        </div>
    );
};

export default App;
