import { createSlice } from "@reduxjs/toolkit"
import { addQuizId } from "../topics/topicsSlice.js"

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {quizzes: {}},
  reducers: {
    addQuiz: (state, action) => {
        state.quizzes = {...state.quizzes,
                            [action.payload.id]: {
                                                id: action.payload.id,
                                                name : action.payload.name,
                                                topicId: action.payload.topicId,
                                                cardIds: action.payload.cardIds,
        }};
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;

export function thunkAddQuiz (newQuiz) {
    return (dispatch) => {
        dispatch(addQuiz(newQuiz));
        dispatch(addQuizId({quizId: newQuiz.id, topicId: newQuiz.topicId}));
    }}
