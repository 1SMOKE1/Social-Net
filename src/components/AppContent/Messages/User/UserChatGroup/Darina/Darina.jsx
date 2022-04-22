import React from 'react';
import styles from './Darina.module.css';

const Darina = (props) => {
  debugger
  const darinaChatId = React.createRef();

  const addMessageDarina = () => {
    props.addMessageDarina()
  }

  const onMessageChange = () => {
    let message = darinaChatId.current.value;
    props.messageChange(message)
  }

  let messages = props.messagesData
  .map (message => <div className={styles.message} key={message.key} ><p>{message.text}</p></div>)


  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        DARINA'S CHAT
      </h1>
      <div className={styles.messageBlock}>
        {messages}
      </div>
      <div> 
        <textarea className={styles.chatArea} value={props.newMessageText} onChange={onMessageChange} ref={darinaChatId}/>
        <button className={styles.button} onClick={addMessageDarina}>Send Message</button>
      </div>
      
    </div>
  );
}

export default Darina;
