import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { catReducer } from './catReducer';
import { authReducer } from './authReducer';
import { montReducer } from './montReducer';



export const rootReducer = combineReducers({
    ui: uiReducer,
    cat: catReducer,
    mont: montReducer,
    auth: authReducer,
})

