import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const gTipoLoadedStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("guardtype");
      const body = await resp.json();
      dispatch(gTipoLoaded(body.recordset));
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "No de ha podido completar la operación", "error");
    }
  };
};

const gTipoLoaded = (guardiaTipo) => ({
  type: types.guardia_tipo_loaded,
  payload: guardiaTipo,
});

export const mHorariaLoadedStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("modalityHour");
      const body = await resp.json();
      dispatch(mHorariaLoaded(body.recordset));
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "No de ha podido completar la operación", "error");
    }
  };
};

const mHorariaLoaded = (modalidadHoraria) => ({
  type: types.modalidad_horaria_loaded,
  payload: modalidadHoraria,
});

export const dServicioLoadedStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("dayservice");
      const body = await resp.json();
      dispatch(dServicioLoaded(body.recordset));
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "No de ha podido completar la operación", "error");
    }
  };
};

const dServicioLoaded = (diaServicio) => ({
  type: types.dia_servicio_loaded,
  payload: diaServicio,
});
