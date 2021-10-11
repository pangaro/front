import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { catReducer } from './catReducer';
import { authReducer } from './authReducer';



export const rootReducer = combineReducers({
    ui: uiReducer,
    cat: catReducer,
    auth: authReducer
})

