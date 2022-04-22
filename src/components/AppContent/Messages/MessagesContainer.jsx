import React from 'react';
import Messages from './Messages';

const MessagesContainer = (props) => {
  return (<Messages userData={props.store.getState().messagesPage.userData} chatInfo={props.store.getState().messagesPage.chatInfo}/>)
}

export default MessagesContainer;