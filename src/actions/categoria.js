import Swal from 'sweetalert2';
import { fetchConToken } from '../helpers/fetch';
import { types } from "../types/types";

export const categoriaStartLoading = () => {
    return async(dispatch) => {
        
        try {
            
            const resp = await fetchConToken( 'category' );
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

export const categoriaStartAddNew = ( categoria ) => {
    return async( dispatch, getState ) => {
//TODO agregar el username en el alta
        // const { username } = getState().auth;
        try {
            const resp = await fetchConToken('category/new', categoria, 'POST');
            const body = await resp.json();

            if ( body.ok ) {
    //             // event.id = body.event.id;
    //             // event.user = {
    //             //     _id: uid,
    //             //     name: name
    //             // }
    //             // console.log( event );
                dispatch( categoriaAddNew( categoria ) );
                Swal.fire('Atención', body.msg, 'success');
            }
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'No de ha podido completar la operación', 'error');
        }     
    }
}

const categoriaAddNew = (categoria) => ({
    type: types.categoria_add_new,
    payload: categoria
});

export const categoriaSetActive = (categoria) => ({
    type: types.categoria_set_active,
    payload: categoria
});

export const CategoriaStartDelete = () => {
    return async ( dispatch, getState ) => {

        const { Categoria } = getState().cat.catActive;

        try {
            const resp = await fetchConToken(`category/${ Categoria }`, {}, 'DELETE' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( categoriaDeleted() );
                Swal.fire('Atención', body.msg, 'success');
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'No de ha podido completar la operación', 'error');
        }

    }
}

export const categoriaStartUpdate = ( categoria ) => {
    return async(dispatch, getState) => {
        const { Categoria } = getState().cat.catActive;
        try {
            const resp = await fetchConToken(`category/${ Categoria }`, categoria, 'PUT' );
            const body = await resp.json();
            
            if ( body.ok ) {
                dispatch(categoriaUpdated(categoria));
                Swal.fire('Atención', body.msg, 'success');
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'No de ha podido completar la operación', 'error');
        }

    }
}

export const categoriaClearActive = () => ({ type: types.categoria_clear_active });

const categoriaUpdated = ( categoria ) => ({
    type: types.categoria_updated,
    payload: categoria
});

const categoriaDeleted = () => ({ type: types.categoria_deleted });

const categoriaLoaded = (categorias) => ({
    type: types.categoria_loaded,
    payload: categorias
})

