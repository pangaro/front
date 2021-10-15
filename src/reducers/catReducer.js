import { types } from "../types/types";

const initialState = {
    cats: [],
    catActive: null
}

export const catReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.categoria_loaded:
            return {
                ...state,
                cats: [...action.payload]
            }
        case types.categoria_add_new:
            return {
                ...state,
                cats: [
                    ...state.cats,
                    action.payload
                ]
            }
        case types.categoria_set_active:
            return {
                ...state,
                catActive: action.payload
            }
        case types.categoria_deleted:
            return {
                ...state,
                cats: state.cats.filter(
                    c => ( c.Categoria !== state.catActive.Categoria )
                ),
                catActive: null
            }
        case types.categoria_clear_active:
            return {
                ...state,
                catActive: null
            }
        case types.categoria_updated:
            return {
                ...state,
                cats: state.cats.map((c) =>
                c.Categoria === action.payload.Categoria ? action.payload : c
                ),
            };
        default:
            return state;
    }
}