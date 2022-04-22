import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  let createPosts = props.posts
  .map (post => <Post className={post.styles} text={post.text} id={post.id} key={post.id}/>)

  let textAreaRef = React.createRef();

  let onAddPost = ()  => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = textAreaRef.current.value;
    props.updateNewPostTextCreator(text)
    
  }

  return (
    <div  className={styles.content}>
      My Posts
      <div>
        New Post
      </div>
      <div>
        <textarea 
        ref={textAreaRef} 
        value={props.newPostText}
        onChange={onPostChange}
        />
        <button onClick={onAddPost}>Add post</button>
        <div className={styles.posts}>
        {createPosts}
        </div>
      </div>
    </div>
  );
}

export default MyPosts;
