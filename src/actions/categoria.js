import { types } from "../types/types";

export const categoriaAdd = () => {
    return (dispatch) => {
        dispatch( agregarCategoria())
    }
}


const agregarCategoria = () => ({
    type: types.categoria_add
})


