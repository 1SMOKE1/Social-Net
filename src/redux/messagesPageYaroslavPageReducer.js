const ADD_MESSAGE_YAROSLAV = 'ADD-MESSAGE-YAROSLAV';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = { 
  messagesData: [
  ],
  newMessageText: 'empty',
}

const messagesPageYaroslavPageReducer = (state = initialState,action) => {
  switch(action.type){
    case ADD_MESSAGE_YAROSLAV: 
      let newMessage = {
        text: `${state.newMessageText}`,
        key: 2,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = '';
      return state
    case UPDATE_MESSAGE_TEXT: 
      state.newMessageText = action.text;
      return state
    default:
      return state
  }
}

export const addMessageYaroslavActionCreator = () => ({type: ADD_MESSAGE_YAROSLAV})
export const updateMessageTextCreator = (message) => ({type: UPDATE_MESSAGE_TEXT, text: message})

export default messagesPageYaroslavPageReducer;