import { createSlice } from "@reduxjs/toolkit"

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {topics: {}},
  reducers: {
    addTopic: (state, action) => {
        state.topics = {...state.topics,
                            [action.payload.id]: {
                                                id: action.payload.id,
                                                name : action.payload.name,
                                                icon: action.payload.icon,
                                                quizIds: [],
        }};
    },

    addQuizId: (state, action) => {
      //  console.log(action.payload.topicId);
        state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizId } = topicsSlice.actions;

export default topicsSlice.reducer;
