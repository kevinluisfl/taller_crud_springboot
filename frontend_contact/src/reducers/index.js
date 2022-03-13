import {combineReducers} from 'redux';

import contactoReducer from './contactReducer';

export default combineReducers ({
    contacto: contactoReducer,
});