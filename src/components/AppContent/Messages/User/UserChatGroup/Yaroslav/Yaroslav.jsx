import React from 'react';
import styles from './Yaroslav.module.css';

const Yaroslav = (props) => {
  debugger
  const yaroslavChatId = React.createRef();
  
  const onAddMessageYaroslav = () => 
    props.addMessageYaroslav()

  let onMessageChange = () => {
    let message = yaroslavChatId.current.value;
    props.addMessageChange(message)
    
  }

  let messages = props.messagesData
  .map (message => <div className={styles.message} key={props.key}><p>{message.text}</p></div>);

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        YAROSLAV'S CHAT
      </h1>
      <div className={styles.messageBlock}>
        {messages}
      </div>
      <div>
        <textarea className={styles.chatArea} value={props.newMessageText} onChange={onMessageChange} ref={yaroslavChatId} />
        <button className={styles.button} onClick={onAddMessageYaroslav}>Send Message</button>
      </div>
      
    </div>
  );
}

export default Yaroslav;
