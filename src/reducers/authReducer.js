import { types } from "../types/types";

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch ( action.type ) {
        
    case types.auth_login:
        return {
            ...state,
            ...action.payload,
            checking: false
        }

    case types.auth_checking_finish:
        return {
            ...state,
            checking: false
        }

    case types.auth_logout:
        return {
            checking: false
        }


    default:
        return state;
}
};
