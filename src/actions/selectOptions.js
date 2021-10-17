import Swal from 'sweetalert2';
import { fetchConToken } from '../helpers/fetch';
import { types } from "../types/types";

export const categoriaStartLoading = () => {
    return async(dispatch) => {
        
        try {

            const resp = await fetchConToken( 'modalityHours' );
            const body = await resp.json();
            // const events = dateEvents( body.event );
            // console.log(body.recordset)
            dispatch( categoriaLoaded( body.recordset ) );

        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'No de ha podido completar la operación', 'error');
        }

    }
}

const categoriaLoaded = (categorias) => ({
    type: types.categoria_loaded,
    payload: categorias
})

