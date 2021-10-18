import { types } from "../types/types";

const initialState = {
  gTipo: [],
  mHoraria: [],
  dServicio: [],
};

export const selReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.guardia_tipo_loaded:
      return {
        ...state,
        gTipo: [...action.payload],
      };
    case types.modalidad_horaria_loaded:
    return {
        ...state,
        mHoraria: [...action.payload],
    };
  case types.dia_servicio_loaded:
    return {
        ...state,
        dServicio: [...action.payload],
    };
    default:
      return state;
  }
};
