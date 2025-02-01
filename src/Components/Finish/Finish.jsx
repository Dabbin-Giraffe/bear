import React from 'react';
import "./Finish.css";
import { useLocation } from 'react-router-dom';
import sugar2 from "../../assets/sugar-2.jpeg";
import nugget2 from "../../assets/nugget-2.jpeg";
import dodo2 from "../../assets/dodo-2.jpg";

const Finish = () => {

    const location = useLocation();
    const { option } = location.state || {};

    return (
        <>
            <div className="finish-wrapper">
                <div className="finish-container">
                    <div className="finish-text">
                        <p>RESULTSSS!!!</p>
                        <p>Your personality closely matches with one and only <span>{option == "a" ? "Sugar" : option == "b" ? "Dodo" : "Nugget"}</span></p>
                        <img src={option == "a" ? sugar2 : option == "b" ? dodo2 : nugget2} alt="" />
                    </div>
                    <div className="bottom">
                        <p>Happy Teddy day my pookie bear</p>
                        <p>
                            ps : This happened while i was making this website, but welcome to our new baby (at this point idek the name lol, my baby was too tired and drunk hehehe)
                        </p>
                    </div>

                </div >
            </div>
        </>
    )
}

export default Finish
