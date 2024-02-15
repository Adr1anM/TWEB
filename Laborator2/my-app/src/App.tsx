import React from "react";
import { observer } from "mobx-react";
import dataStore from "./DataStore";
import "./AboutMe.css"; 

const AboutMe = observer(() => {
    return (
        <div className="about-me-container"> {}
           
            <div className="info-block"> {}
                <h1>About Me</h1>
                <p>Name: {dataStore.name}</p>
                <p>Age: {dataStore.age}</p>
                <p>Location: {dataStore.location}</p>
            </div>
        </div>
    );
});

export default AboutMe;
