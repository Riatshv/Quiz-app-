import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { QuizRender } from "../QuizRender/QuizRender";
import { questionsContainerACTIONS } from "../../store/modules/questionsContainer.js/actions";
import { EndQuizRenderContainer } from "../../containers/EndQuizRenderContainer/EndQuizRenderContainer";


export const Quiz = ({questionObject, questionsIds, isEndedQuiz, countCorrectAnswers, isSelected}) => {
    const dispatch = useDispatch();
    
    const {id, answers, question, choosenAnswer} = questionObject;
    const questionObjectIndex = questionsIds.indexOf(id);


    return (
        <div className="quizContainer">
            {!isEndedQuiz ? 
                <QuizRender
                    question={question}
                    answers={answers}
                    onNextQuestion={choosenAnswer ? 
                        (index) => dispatch({
                            type: questionsContainerACTIONS.NEXT_QUESTION, 
                            payload:index + 1,
                        })
                    :
                        () => dispatch({
                            type: questionsContainerACTIONS.NEED_TO_SELECT_ANSWER,
                        })
                    }

                    onEndQuiz={choosenAnswer ? 
                        (index) => dispatch({
                            type: questionsContainerACTIONS.END_QUIZ, 
                            payload: index + 1,
                        })
                    :
                    () => dispatch({
                            type: questionsContainerACTIONS.NEED_TO_SELECT_ANSWER,
                        })
                    }


                    questionObjectIndex={questionObjectIndex}
                    questionsIds={questionsIds}
                    isSelected={isSelected}
                >

                </QuizRender>
            :

                <EndQuizRenderContainer
                    countCorrectAnswers = {countCorrectAnswers}
                    onRestartQuiz = {() => {
                        dispatch({
                            type: questionsContainerACTIONS.RESTART_QUIZ,
                        })
                    }}
                >

                </EndQuizRenderContainer>
            }
            
        </div>
    )
}