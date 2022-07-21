export const selectQuestions = (state) => state.questions;

export const selectQuestionsIds = (state) => selectQuestions(state).ids;