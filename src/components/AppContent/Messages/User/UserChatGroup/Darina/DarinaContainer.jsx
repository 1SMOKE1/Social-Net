import Darina from './Darina';
import { addMessageDarinaActionCreator,updateMessageTextCreator } from '../../../../../../redux/messagesPageDarinaPageReducer';

const DarinaContainer = (props) => {

  let state = props.store.getState();

  const addMessageDarina = () => {
    props.store.dispatch(addMessageDarinaActionCreator())
  }

  const messageChange = (message) => {
    props.store.dispatch(updateMessageTextCreator(message))
  }

  return (
    <Darina 
      addMessageDarina={addMessageDarina}  
      messageChange={messageChange}
      messagesData={state.pageDarina.messagesData}
      newMessageText={state.pageDarina.newMessageText}  
    />
  );
}

export default DarinaContainer;