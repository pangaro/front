import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (username, password) => {
  return async (dispatch) => {
    const respuesta = await fetchSinToken("login", {}, "GET");
    const data = await respuesta.json();

    if (data.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          username: data.username,
        })
      );
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const respuesta = await fetchConToken("renew");
    const data = await respuesta.json();

    if (data.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          username: data.username,
        })
      );
    } else {
      dispatch(checkingFinish());
    }
  };
};

const checkingFinish = () => ({
  type: types.auth_checking_finish,
});

const login = (username) => ({
  type: types.auth_login,
  payload: username,
});
