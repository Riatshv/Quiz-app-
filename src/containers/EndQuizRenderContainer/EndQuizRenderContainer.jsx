import { useSelector } from "react-redux"
import { EndQuizRender } from "../../components/EndQuizRender/EndQuizRender"
import { selectQuestionsArray } from "../../store/modules/questionsContainer.js/selectors"

export const EndQuizRenderContainer = ({countCorrectAnswers, onRestartQuiz}) => {
    const questionsArray = useSelector((state) => selectQuestionsArray(state));

    console.log(questionsArray)

    return <EndQuizRender
        countCorrectAnswers = {countCorrectAnswers}
        onRestartQuiz = {onRestartQuiz}
        questionsArray = {questionsArray}
    >

    </EndQuizRender>
}