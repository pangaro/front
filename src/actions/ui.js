import { types } from '../types/types';


export const setError = ( error ) => ({
    type: types.ui_set_error,
    payload: error,
});

export const removeError = () => ({
    type: types.ui_remove_error,
}); 

export const startLoading = () => ({
    type: types.ui_start_loading,
}); 

export const finishLoading = () => ({
    type: types.ui_finish_loading,
}); 