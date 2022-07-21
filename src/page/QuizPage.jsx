import React from "react";
import { QuizContainer } from "../containers/QuizContainer/QuizContainer";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "../store";



export const QuizPage = () => {

    return (
        <Provider store={store}>
            <div className="quizLayout">
                <h1 className="quizHeader">
                    <div className="quizHeader3D"></div>
                    Добро пожаловать в киношный квиз!
                </h1>
                <QuizContainer></QuizContainer>
            </div>
        </Provider>
    )
}