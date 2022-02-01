import { combineReducers } from 'redux';

import filterReducer from './filter_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    filter: filterReducer
});
export default uiReducer;