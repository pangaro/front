import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const gTipoLoadedStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("guardtype");
      const body = await resp.json();

      const guardiaTipo = body.recordset.map((item) => {
        return {
          value: item.GuardiaTipoID,
          label: item.Descripcion,
        };
      });

      dispatch(gTipoLoaded(guardiaTipo));

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

      const modalidadHoraria = body.recordset.map((item) => {
        return {
          value: item.ModalidadHorariaID,
          label: item.ModalidadHorariaID,
        };
      });
      dispatch(mHorariaLoaded(modalidadHoraria));
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

      const diasServicio = body.recordset.map((item) => {
        return {
          value: item.DiasServicioID,
          label: item.Descripcion,
        };
      });

      dispatch(dServicioLoaded(diasServicio));
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "No de ha podido completar la operación", "error");
    }
  };
};

const dServicioLoaded = (diasServicio) => ({
  type: types.dia_servicio_loaded,
  payload: diasServicio,
});

export const cSelLoadedStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("categorysel");
      const body = await resp.json();

      const categoriaSelect = body.recordset.map((item) => {
        return {
          value: item.Categoria,
          label: item.Categoria,
        };
      });

      dispatch(categoriaLoaded(categoriaSelect));
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "No de ha podido completar la operación", "error");
    }
  };
};

const categoriaLoaded = (categoria) => ({
  type: types.categoria_sel_loaded,
  payload: categoria,
});
