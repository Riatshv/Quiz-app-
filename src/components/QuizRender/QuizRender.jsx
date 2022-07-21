import { Question } from "../Question/Question";
import { AnsewersContainer } from "../../containers/AnswersContainer/AnswersContainer";

import "./styles.css"


export const QuizRender = ({question, answers, onNextQuestion, onEndQuiz, questionObjectIndex, questionsIds, isSelected}) => {
    console.log(questionObjectIndex)
    return (
        <>
            <Question question={question}></Question>
            <ul>
                <AnsewersContainer answers={answers}></AnsewersContainer>
            </ul>



            {questionObjectIndex < questionsIds.length - 1 ? 
                <button onClick={() => onNextQuestion(questionObjectIndex)}
                >
                    Следующий вопрос
                </button>
            :
                <button onClick={() => onEndQuiz(questionObjectIndex)}
                >
                    Закончить квиз
                </button>
            }

            { isSelected && 
                <div className="needSelectedAnswer">ВЫБЕРИТЕ ВАРИАНТ ОТВЕТА!</div>
            }
        </>
    )
}