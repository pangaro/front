import { types } from "../types/types";

const initialState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ui_set_error:
      return {
        ...state,
        msgError: action.payload,
      };

    case types.ui_remove_error:
      return {
        ...state,
        msgError: null,
      };

    case types.ui_start_loading:
      return {
        ...state,
        loading: true,
      };

    case types.ui_finish_loading:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
