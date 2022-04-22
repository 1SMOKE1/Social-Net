import React from 'react';
import MyPosts from './MyPosts';
import { updateNewPostTextCreator, addPostActionCreator } from '../../../../redux/profilePageReducer';

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = ()  => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextCreator(text))
  }

  
  return (
  <MyPosts 
  updateNewPostTextCreator={onPostChange}
  addPost={addPost}
  posts={state.profilePage.postsData} 
  newPostText={state.profilePage.newPostText}
  />)
}

export default MyPostsContainer;