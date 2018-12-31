import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import { setupDusk, getPartFromHandlers } from 'redux-dusk';
import * as App from './App';
import * as Community from './Community';
import * as CommunityList from './CommunityList';
import * as QuestionBank from './QuestionBank';

export const handlers = [
  App,
  Community,
  CommunityList,
  QuestionBank,
];

export const {
  nameSpaces,
  types,
  reducers,
  stateMapper,
  actionsMapper,
} = setupDusk(handlers, { connect });

export const combinedLogic = getPartFromHandlers(handlers, `logic`);
export const combinedReducer = combineReducers(reducers);
