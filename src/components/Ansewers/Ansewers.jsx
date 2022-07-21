import "./styles.css";
import {useDispatch} from "react-redux";
import { questionsContainerACTIONS } from "../../store/modules/questionsContainer.js/actions";

export const Ansewers = ({answers, choosenAnswer, justRender, correctAnswer}) => {
    const letters = Object.keys(answers);
    console.log(answers)


    const dispatch = useDispatch();

    return (
        Object.values(answers).map((answer, index) => {
            return (
                <li 
                    key={index} 
                    className={
                        justRender ?
                            [
                                "item", choosenAnswer === answer && choosenAnswer === correctAnswer ? "correctAnswer" : "",
                                choosenAnswer === answer && choosenAnswer !== correctAnswer? "unCorrectAnswer" : ""
                            ]
                            .join(" ")
                        :
                            ["item", "onHover", choosenAnswer === answer ? "isActive" : ""].join(" ")    
                    }

                    onClick={
                        justRender?
                            () => {}
                        :
                            () => dispatch({type: questionsContainerACTIONS.SELECT_ANSWER, payload: answer})}    
                >
                    {letters[index]}: {answer}
                </li>
            )
        })
    )
}