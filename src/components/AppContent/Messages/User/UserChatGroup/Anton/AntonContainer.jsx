import Anton from './Anton';
import { addMessageAntonActionCreator, updateMessageTextCreator } from '../../../../../../redux/messagesPageAntonPageReducer';

const AntonContainer = (props) => {
  let state = props.store.getState();

  let addMessageAnton = () => props.store.dispatch(addMessageAntonActionCreator());

  let onMessageChange = (message) => {
    props.store.dispatch(updateMessageTextCreator(message))
  }

   
  return (
  <Anton 
    messagesData={state.pageAnton.messagesData}
    newMessageText={state.pageAnton.newMessageText}
    addMessageAnton={addMessageAnton}
    onMessageChange={onMessageChange}
    />)
}

export default AntonContainer;