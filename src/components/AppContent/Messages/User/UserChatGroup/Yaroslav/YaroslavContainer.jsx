import Yaroslav from './Yaroslav';
import { addMessageYaroslavActionCreator, updateMessageTextCreator} from '../../../../../../redux/messagesPageYaroslavPageReducer';

const YaroslavContainer = (props) => {

  let state = props.store.getState()
  
  const addMessageYaroslav = () => 
    props.store.dispatch(addMessageYaroslavActionCreator())

  let addMessageChange = (message) => {
    props.store.dispatch(updateMessageTextCreator(message))
    
  }

  return (
  <Yaroslav
   addMessageYaroslav={addMessageYaroslav}
   addMessageChange={addMessageChange}
   messagesData={state.pageYaroslav.messagesData}
   newMessageText={state.pageYaroslav.newMessageText}
  />);
}

export default YaroslavContainer;