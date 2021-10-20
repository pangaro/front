import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const montoStartLoading = (Anio) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("categoryAmount", { Anio }, "POST");
      const body = await resp.json();

      body.ok
        ? dispatch(montoLoaded(body.recordset))
        : dispatch(montoClear(body.recordset));
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "No de ha podido completar la operación", "error");
    }
  };
};

export const montoStartAddNew = (monto) => {
  return async (dispatch, getState) => {
    const { username: Usuario } = getState().auth;

    const montoOk = { ...monto, Usuario };
    delete montoOk.CategoriaMontosID;

    try {
      const resp = await fetchConToken("categoryAmount/new", montoOk, "POST");
      const body = await resp.json();

      if (body.ok) {
        dispatch(montoAddNew(montoOk));
        Swal.fire("Atención", body.msg, "success");
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "No de ha podido completar la operación", "error");
    }
  };
};

const montoAddNew = (monto) => ({
  type: types.monto_add_new,
  payload: monto,
});

export const montoSetActive = (monto) => ({
  type: types.monto_set_active,
  payload: monto,
});

export const montoStartDelete = () => {
  return async (dispatch, getState) => {
    const { CategoriaMontosID } = getState().mont.montActive;

    try {
      const resp = await fetchConToken(
        `categoryAmount/${CategoriaMontosID}`,
        {},
        "DELETE"
      );
      const body = await resp.json();

      if (body.ok) {
        dispatch(montoDeleted());
        Swal.fire("Atención", body.msg, "success");
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "No de ha podido completar la operación", "error");
    }
  };
};

export const montoStartUpdate = (monto) => {
  return async (dispatch, getState) => {
    const { monto } = getState().mont.montActive;
    try {
      const resp = await fetchConToken(`categoryAmount/${monto}`, monto, "PUT");
      const body = await resp.json();

      if (body.ok) {
        dispatch(montoUpdated(monto));
        Swal.fire("Atención", body.msg, "success");
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "No de ha podido completar la operación", "error");
    }
  };
};

export const montoClearActive = () => ({ type: types.monto_clear_active });

const montoUpdated = (monto) => ({
  type: types.monto_updated,
  payload: monto,
});

const montoDeleted = () => ({ type: types.monto_deleted });

const montoLoaded = (montos) => ({
  type: types.monto_loaded,
  payload: montos,
});

const montoClear = () => ({ type: types.monto_clear });
