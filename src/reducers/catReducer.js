import { types } from "../types/types";

export const catReducer = ( state = {}, action ) => {

    switch (action.type) {
        case types.categoria_add:
            return {
                ...state,
                loading: true
            }
            case types.categoria_add_exito:
                return {
                    ...state,
                } 
    
        default:
            return state;
    }
}