import React from 'react';
import "./PopUp.css";
import { useNavigate } from 'react-router-dom';

const PopUp = ({ winner }) => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate("/finish", { state: { option: winner } })
    }

    return (
        <>
            <div className="pop-overlay"></div>
            <div className="pop-container">
                <div className="pop-content">
                    <p>Yayy!! You are done with quiz honey :D</p>
                    <p>Excited to check out the results? 😏</p>
                </div>
                <button onClick={redirect}>OFCCC i am you dummy, take me there NOWW</button>
            </div>
        </>
    )
}

export default PopUp
