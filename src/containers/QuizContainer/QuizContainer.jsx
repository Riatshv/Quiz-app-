import { Quiz } from "../../components/Quiz/Quiz";
import { useSelector } from "react-redux";
import { selectCountCorrectAnswers, selectCurrentQuestion, selectQuestionIsSelected, selectQuizIsEnded } from "../../store/modules/questionsContainer.js/selectors";
import { selectQuestionsIds } from "../../store/modules/questions/selectors";
import { store } from "../../store";

export const QuizContainer = () => {
    const questionObject = useSelector((state) => selectCurrentQuestion(state));
    const questionsIds = useSelector((state) => selectQuestionsIds(state));
    const isEndedQuiz = useSelector((state) => selectQuizIsEnded(state));
    const isSelected = useSelector((state) => selectQuestionIsSelected(state));
    const countCorrectAnswers = useSelector((state)=> selectCountCorrectAnswers(state));
    console.log(isSelected)


    console.log(store.getState())

    return (
        <Quiz 
            questionObject={questionObject} 
            questionsIds={questionsIds} 
            isEndedQuiz={isEndedQuiz} 
            countCorrectAnswers={countCorrectAnswers}
            isSelected={isSelected}
        >

        </Quiz>
    )
}