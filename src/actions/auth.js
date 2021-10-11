import Swal from 'sweetalert2';
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = ( username, password ) => {
  return async( dispatch ) => {
      const resp = await fetchSinToken( 'auth/login', { username, password }, 'POST' );
      const body = await resp.json();
    console.log(body)
      if( body.ok ) {
          localStorage.setItem('token', body.token );
          localStorage.setItem('token-init-date', new Date().getTime() );

          dispatch( login({
            username: body.username
          }) )
      } else {
          Swal.fire('Error', body.msg, 'error');
      }
      

  }
}

export const startChecking = () => {
  return async(dispatch) => {

      const resp = await fetchConToken( 'auth/renew' );
      const body = await resp.json();

      if( body.ok ) {
          localStorage.setItem('token', body.token );
          localStorage.setItem('token-init-date', new Date().getTime() );

          dispatch( login({

            username: body.username
          }) )
      } else {
          dispatch( checkingFinish() );
      }
  }
}

const checkingFinish = () => ({ type: types.auth_checking_finish });



const login = ( username ) => ({
    type: types.auth_login,
    payload: username
});


export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        //dispatch( eventLogout() );
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.auth_logout })