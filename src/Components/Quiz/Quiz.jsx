import React, { useState } from 'react';
import "./Quiz.css";
import data from "./data.json";
import { useNavigate } from 'react-router-dom';
import PopUp from '../PopUp/PopUp';

const Quiz = () => {

    const [questionNumber, setQuestionNNumber] = useState(0)
    const [scores, setScores] = useState({ "a": 0, "b": 0, "c": 0 });
    const [quizComplete, setQuizComplete] = useState(false);

    const currentQuestion = data[questionNumber];

    const handleSelection = (score) => {
        setScores((prevScores) => ({
            ...prevScores, [score]: scores[score] + 1
        }));
        incrementQuestion();
    }

    const incrementQuestion = () => {
        if (questionNumber < 4) {
            setQuestionNNumber(questionNumber + 1);
        } else {
            setQuizComplete(true);
        }
    }

    const findMaxScore = () => {
        const maxScore = Object.entries(scores).reduce((max, entry) =>
            entry[1] > max[1] ? entry : max
        );
        return maxScore[0]
    };

    return (
        <>
            <div className="quiz-wrapper">
                <div className="quiz-content">
                    <p>Q{questionNumber + 1}. {currentQuestion["question"]}</p>
                    <div className="quiz-buttons">
                        {currentQuestion["options"].map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelection(option["score"])}
                            >{option["option"]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {quizComplete && <PopUp winner={findMaxScore()} />}
        </>
    )
}

export default Quiz
