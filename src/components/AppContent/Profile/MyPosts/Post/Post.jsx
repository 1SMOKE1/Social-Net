import React from 'react';
import styles from './Post.module.css';
import avatar from '../../../../../assets/main_content/avatar.png'

const Post = (props) => {
  return (
    <div>
      <div className={styles.item}>
        <img src={avatar} className={styles.avatar}alt="" />
        {`${props.text}`}
      </div>
    </div>
  )
}

export default Post;
