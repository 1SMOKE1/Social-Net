import React from 'react';
import styles from './ChatInfo.module.css'

const ChatInfo = (props) => {
  return (
    <div className={styles.chat}>
      <div className={styles.lastMessage}>
        LastMessage: <span className={styles.text}>{props.lastMessage}</span>
      </div>
      <div className={styles.unreadMessages}>
        UnreadMessages: <span className={styles.number}>{props.messageCount}</span>
      </div>
    </div>
  );
}

export default ChatInfo;
