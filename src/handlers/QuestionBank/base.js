import { createHandler } from 'redux-dusk';
import * as reducers from './reducers';

export const nameSpace = `QUESTION_BANK`;
export const initialState = {
  questions: [],
  questionsMeta: {
    status: '', // '', 'loading', 'error'
    messages: [],
  },
  interactions: {},
};

export const { types, actions, reducer } = createHandler({
  types: {
    SET: {
      INTERACTION: {
        action: [`id`, `key`, `value`], // $actions.QUESTION_BANK.setInteraction(id, key, value)
        reducer: {
          reduce: reducers.setInteraction,
        },
      },
    },
    FETCH: {
      QUESTIONS: {
        action: [],   // $actions.QUESTION_BANK.fetchQuestions()
        reset: [`questionsMeta`],

        SUCCESS: {

        },

        FAILURE: {
          
        },
        reducer: {
          reduce: [`questions`], // sets the 'questions' state field to the 'questions' param
        },
      },
    }
  },

  nameSpace,
  initialState,
});
