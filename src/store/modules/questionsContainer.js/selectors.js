export const selectQuestionContainerModule = (state) => state.questionsContainer;

export const selectCurrentQuestion = (state) => selectQuestionContainerModule(state)?.container;

export const selectChoosenAnswer = (state) => selectCurrentQuestion(state)?.choosenAnswer;

export const selectCorrectAnswer = (state) => selectCurrentQuestion(state)?.correctAnswer;

export const selectQuizIsEnded = (state) => selectQuestionContainerModule(state)?.isEnded;

export const selectCountCorrectAnswers = (state) => selectQuestionContainerModule(state)?.countCorrectAnswers;

export const selectQuestionsArray = (state) => selectQuestionContainerModule(state)?.questionsArray;

export const selectQuestionIsSelected = (state) => selectQuestionContainerModule(state)?.isSelected;