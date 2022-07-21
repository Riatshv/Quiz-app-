import { questions } from "../../../components/constants/constants";


const initialState = {
    ids: questions.map(({id}) => id),
    entities: questions.reduce((acc, question) => {
        acc[question.id] = question;
        return acc;
    }, {}),
}

export const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}