const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, text: "post" },
    { id: 2, text: "post" },
    { id: 3, text: "post" },
  ],
  newPostText: "write something",
}

const profilePageReducer = (state = initialState, action) => {
  
  switch(action.type){
    case ADD_POST: 
      let newPost = {
        id: 4,
        text: `${state.newPostText}`,
      };
      state.postsData.push(newPost);
      state.newPostText = '';
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.updateText;
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, updateText: text})

export default profilePageReducer;