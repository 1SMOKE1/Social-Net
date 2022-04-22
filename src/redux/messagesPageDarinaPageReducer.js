const ADD_MESSAGE_DARINA = 'ADD-MESSAGE-DARINA';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
  messagesData: [
  ],
  newMessageText: 'empty',
}

const messagesPageDarinaPageReducer = (state = initialState,action) => {
  switch(action.type){
    case ADD_MESSAGE_DARINA: 
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

export const addMessageDarinaActionCreator = () => ({type: ADD_MESSAGE_DARINA})
export const updateMessageTextCreator = (message) => ({type: UPDATE_MESSAGE_TEXT, text: message})

export default messagesPageDarinaPageReducer;