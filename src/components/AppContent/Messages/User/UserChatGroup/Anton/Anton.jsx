import React from 'react';
import styles from './Anton.module.css';


const Anton = (props) => {
  debugger
  let antonChatId = React.createRef();

  let onAddMessageAnton = () => props.addMessageAnton();

  let onMessageChange = () => {
    let message = antonChatId.current.value;
    props.onMessageChange(message);
  }

  let messages = props.messagesData
  .map (message => <div className={styles.message} key={props.key}><p>{message.text}</p></div>) 

  return (
    
    <div className={styles.content}>
      <h1 className={styles.title}>
        ANTON'S CHAT
      </h1>
      <div className={styles.messageBlock}>
        {messages}
      </div>
      <div>
        <textarea className={styles.chatArea}  ref={antonChatId} value={props.newMessageText} onChange={onMessageChange}/>
        <button className={styles.button} onClick={onAddMessageAnton}>Send message</button>
      </div>
    </div>
    
  );
}

export default Anton;
