import { types } from "../types/types";

const initialState = {
    monts: [],
    montActive: null
}

export const montReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.monto_loaded:
            return {
                ...state,
                monts: [...action.payload]
            }
        case types.monto_add_new:
            return {
                ...state,
                monts: [
                    ...state.monts,
                    action.payload
                ]
            }
        case types.monto_set_active:
            return {
                ...state,
                montActive: action.payload
            }
        case types.monto_deleted:
            return {
                ...state,
                monts: state.monts.filter(
                    c => ( c.Categoria !== state.montActive.Categoria )
                ),
                montActive: null
            }
        case types.monto_clear_active:
            return {
                ...state,
                montActive: null
            }
        case types.monto_updated:
            return {
                ...state,
                monts: state.monts.map((c) =>
                c.Categoria === action.payload.Categoria ? action.payload : c
                ),
            };
        default:
            return state;
    }
}