import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { catReducer } from './catReducer';
import { authReducer } from './authReducer';
import { montReducer } from './montReducer';
import { selReducer } from './selReducer';



export const rootReducer = combineReducers({
    ui: uiReducer,
    cat: catReducer,
    mont: montReducer,
    auth: authReducer,
    sel: selReducer,
})

