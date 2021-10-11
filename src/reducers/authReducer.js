import { types } from "../types/types";

const initialState = {
  checking: true,
  username:null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.auth_login:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };
    case types.auth_checking_finish:
      return {
        ...state,
        checking: false,
      };
    default:
      return state;
  }
};
