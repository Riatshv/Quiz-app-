import { createStore } from "redux";
import { questionsReducer } from "./modules/questions/reducer";
import { questionsContainerReducer } from "./modules/questionsContainer.js/reducer";


const rootReducer = (state = {}, action) => ({
    questions: questionsReducer(state.question, action),
    questionsContainer: questionsContainerReducer(state.questionsContainer, action),
}); 

export const store = createStore(rootReducer);