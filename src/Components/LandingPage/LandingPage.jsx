import React from 'react';
import "./LandingPage.css"
import { useNavigate } from 'react-router-dom';
import sugar1 from "../../assets/sugar-1.jpeg";
import nugget1 from "../../assets/nugget-1.jpeg";
import dodo1 from "../../assets/dodo-1.jpg";

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="landing-wrapper">
                <div className="content-wrapper">
                    <div className="landing-content">
                        <p>Honey its Teddy day :D</p>
                        <p>Teddys aren't really prominent in our relationship (ignore the fact that you can always cuddle me as if I am a big teddy bear)</p>
                        <p>So i made a smoll Buzzfeed personality typa quiz for you, to determine which one of our babies is closest match to your personality 😋</p>
                    </div>
                </div>
                <div className="landing-images">
                    <img src={sugar1} alt="" />
                    <span>VS</span>
                    <img src={nugget1} alt="" />
                    <span>VS</span>
                    <img src={dodo1} alt="" />
                </div>
                <button onClick={() => navigate("/quiz")}>Let the quiz Begin!!!</button>
            </div>
        </>
    )
}

export default LandingPage
