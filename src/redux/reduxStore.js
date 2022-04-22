import {combineReducers, createStore} from 'redux';
import messagesPageReducer from './messagesPageReducer';
import navBarDataReducer from './navBarDataReducer';
import profilePageReducer from './profilePageReducer';
import messagesPageAntonPageReducer from './messagesPageAntonPageReducer';
import messagesPageYaroslavPageReducer from './messagesPageYaroslavPageReducer';
import messagesPageDarinaPageReducer from './messagesPageDarinaPageReducer';

let reducers  = combineReducers({
  profilePage: profilePageReducer,
  navBarData: navBarDataReducer,
  messagesPage: messagesPageReducer, 
  // 
  pageAnton: messagesPageAntonPageReducer,
  pageYaroslav: messagesPageYaroslavPageReducer,
  pageDarina: messagesPageDarinaPageReducer,
});

let store = createStore(reducers);

export default store