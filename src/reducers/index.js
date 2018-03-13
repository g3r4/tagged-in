import { combineReducers } from 'redux';
import ContactsReducer from './reducer_contacts';

const rootReducer = combineReducers({
  contacts: ContactsReducer,
});

export default rootReducer;