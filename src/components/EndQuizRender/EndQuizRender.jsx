import React from "react";
import { Ansewers } from "../Ansewers/Ansewers";
import { Question } from "../Question/Question";
import "./styles.css"

export const EndQuizRender = ({countCorrectAnswers, onRestartQuiz, questionsArray}) => {
    return (
        <>
            <h3>Конец!</h3>
            <div className="greatJob">Вы набрали целых {countCorrectAnswers} баллов! Молодец</div>
            <button onClick={() => onRestartQuiz()}> Попробуешь еще раз?</button>
            <div>
                {questionsArray.map(({answers, question, choosenAnswer, correctAnswer}) => {
                    return (
                        <React.Fragment key = {question}>
                            <Question question={question}></Question>
                            <ul>
                                <Ansewers answers={answers} choosenAnswer={choosenAnswer} correctAnswer ={correctAnswer} justRender={true}></Ansewers>
                            </ul>
                        </React.Fragment>
                    )
                })}
            </div>
        </>
    );
}