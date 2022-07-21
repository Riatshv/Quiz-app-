import { questions } from "../../../components/constants/constants";
import { correctAnswer } from "../../../components/constants/constants";
import { questionsContainerACTIONS } from "./actions";

const initialStateForContainer = {
    countCorrectAnswers: 0,
    isEnded: false,
    container:{
        ...questions[0],
        ...correctAnswer[0],
    },
    questionsArray:[{
        ...questions[0],
        ...correctAnswer[0],
    }],
}

export const questionsContainerReducer = (state = initialStateForContainer, action) => {
    switch (action.type) {
        case questionsContainerACTIONS.SELECT_ANSWER: {
            const container = state.container;
            const isSelected = state.isSelected;
            if (isSelected) {
                delete state.isSelected;
            }

            return {
                ...state,
                container: {
                    ...container,
                    choosenAnswer: action.payload,
                },
            }
        }

        case questionsContainerACTIONS.RESTART_QUIZ: {
            return initialStateForContainer;
        }

        case questionsContainerACTIONS.NEED_TO_SELECT_ANSWER: {
            return {
                ...state,
                isSelected: true,
            }
        }

        case questionsContainerACTIONS.NEXT_QUESTION: {
            const correctAnswerQuestion = state.container.correctAnswer;
            const choosenAnswerQuestion = state.container.choosenAnswer;
            let countCorrectAnswers = state.countCorrectAnswers;

            
            if (correctAnswerQuestion === choosenAnswerQuestion) {
                countCorrectAnswers+=1;
            }

            const questionsArray = state.questionsArray;
            questionsArray[action.payload - 1].choosenAnswer = choosenAnswerQuestion;
            
            delete state.container.choosenAnswer;

            return {
                ...state,
                countCorrectAnswers: countCorrectAnswers,
                container:{
                    ...questions[action.payload],
                    ...correctAnswer[action.payload]
                },
                
                questionsArray: [
                    ...questionsArray,
                    {
                        ...questions[action.payload],
                        ...correctAnswer[action.payload],
                    }    
                ]
            }
        }

        case questionsContainerACTIONS.END_QUIZ: {
            const correctAnswerQuestion = state.container.correctAnswer;
            const choosenAnswerQuestion = state.container.choosenAnswer;
            let countCorrectAnswers = state.countCorrectAnswers;

            const questionsArray = state.questionsArray;
            questionsArray[action.payload - 1].choosenAnswer = choosenAnswerQuestion;
            
            if (correctAnswerQuestion === choosenAnswerQuestion) {
                countCorrectAnswers+=1;
            }
            return {
                ...state,
                countCorrectAnswers:countCorrectAnswers, 
                isEnded: true,

                questionsArray: [
                    ...questionsArray 
                ]
            }
        }
        default: {
            return state;
        }
    }
}