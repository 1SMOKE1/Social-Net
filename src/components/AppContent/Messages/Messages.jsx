import React from 'react';
import styles from './Messages.module.css';
import User from './User/User';
import ChatInfo from './ChatInfo/ChatInfo';

const Messages = (props) => {
  let createUsers = props.userData
  .map (user => <User userName={user.userName} userId={user.userId} userAge={user.userAge} key={user.userId} to={`/messages/user${user.userId}`}/>)
  
  let createChats = props.chatInfo
  .map (chat => <ChatInfo messageCount={chat.messageCount} lastMessage={chat.lastMessage} messageId={chat.messageId} key={chat.messageId}/>)

  return (
    <div className={styles.title}>
      <div className={styles.content}>
        <div className={styles.userContent}>
          {createUsers}
        </div>
        <div className={styles.chatContent}>
          {createChats}
        </div>
      </div>
    </div>
  );
}

export default Messages;
