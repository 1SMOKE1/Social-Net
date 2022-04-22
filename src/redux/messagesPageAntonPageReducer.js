const ADD_MESSAGE_ANTON = 'ADD-MESSAGE-ANTON';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
  messagesData: [
  ],
  newMessageText: "empty",
}


const messagesPageAntonPageReducer = (state = initialState,action) => {
  switch(action.type){
    case ADD_MESSAGE_ANTON:
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

export const addMessageAntonActionCreator = () => ({type: ADD_MESSAGE_ANTON})
export const updateMessageTextCreator = (message) => ({type: UPDATE_MESSAGE_TEXT, text: message})

export default messagesPageAntonPageReducer;