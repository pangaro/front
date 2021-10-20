import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { anios } from "../../helpers/annexed";
import { useForm } from "../../hooks/useForm";
import { AmountItem } from "./AmountItem.js";
import { montoClearActive, montoStartAddNew, montoStartLoading, montoStartUpdate } from "../../actions/monto.js";
import {
  gTipoLoadedStartLoading,
  mHorariaLoadedStartLoading,
  dServicioLoadedStartLoading,
  cSelLoadedStartLoading,
} from "../../actions/selectOptions";

export const AmountScreen = () => {
  const { monts } = useSelector((state) => state.mont);

  const { catSel, gTipo, dServicio, mHoraria } = useSelector(
    (state) => state.sel
  );

  const dispatch = useDispatch();

  const [formValues, handleInputChange, dropDownChange, reset] = useForm({
    CategoriaMontosID: "",
    Anio: new Date().getFullYear(),
    Categoria: "",
    ModalidadHorariaID: "",
    DiasServicioID: "",
    GuardiaTipoID: "",
    Monto: "",
  });

  const {
    CategoriaMontosID,
    Anio,
    Categoria,
    ModalidadHorariaID,
    DiasServicioID,
    GuardiaTipoID,
    Monto,
  } = formValues;

  useEffect(() => {
    dispatch(cSelLoadedStartLoading());
    dispatch(gTipoLoadedStartLoading());
    dispatch(mHorariaLoadedStartLoading());
    dispatch(dServicioLoadedStartLoading());
    dispatch(montoStartLoading(Anio));
  }, [dispatch]);

  const handleAgregar = (e) => {
    e.preventDefault();
    // if (Categoria ==='' || Descripcion === '') {
    //   return }

    dispatch(montoStartAddNew(formValues));
      // reset();
  };

  const dropDownAnioChange = (e) => {
    dispatch(montoStartLoading(e.value));
  };

  const handleModificar = (values) => {
    dispatch(montoStartUpdate(values));

    dispatch(montoClearActive());
  };

  const stateButton = (value) => {
    const btnAgregar = document.querySelector("#btnAgregar");
    value === true
      ? btnAgregar.classList.add("disabled")
      : btnAgregar.classList.remove("disabled");
  };

  return (
    <>
      <h1 className="h3 mb-3">gestión categoria / montos</h1>
      <div className="row">
        <div className="col-12">
          <div className="mb-3 col-3 border px-3 py-2 bg-white">
            <label className="form-label">Años</label>
            <Select
              options={anios}
              value={anios.value}
              defaultValue={anios[2]}
              name="anio"
              onChange={(e) =>
                dropDownAnioChange({
                  name: "anio",
                  value: e.value,
                })
              }
            />
          </div>
          <div className="card">
            <form onSubmit={handleAgregar}>
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr className="text-center">
                    <th>Categoria</th>
                    <th>Modalidad</th>
                    <th>Dias</th>
                    <th>Tipo</th>
                    <th>Monto</th>
                    <th>Aciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Select
                        options={catSel}
                        name="Categoria"
                        onChange={(e) =>
                          dropDownChange({
                            name: "Categoria",
                            value: e.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <Select
                        options={mHoraria}
                        name="ModalidadHorariaID"
                        onChange={(e) =>
                          dropDownChange({
                            name: "ModalidadHorariaID",
                            value: e.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <Select
                        options={dServicio}
                        name="DiasServicioID"
                        onChange={(e) =>
                          dropDownChange({
                            name: "DiasServicioID",
                            value: e.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <Select
                        options={gTipo}
                        name="GuardiaTipoID"
                        onChange={(e) =>
                          dropDownChange({
                            name: "GuardiaTipoID",
                            value: e.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        pattern="^\d*(\.\d{0,2})?$"
                        name="Monto"
                        value={Monto}
                        autoComplete="off"
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <span
                        id="btnAgregar"
                        className="btn btn-sm btn-secondary float-none"
                        type="submit"
                        onClick={handleAgregar}
                      >
                        Agregar
                      </span>
                    </td>
                  </tr>
                  {monts.map((monto, index) => (
                    <AmountItem
                      key={index}
                      monto={monto}
                      anio={Anio}
                      action={handleModificar}
                      stateButton={stateButton}
                    />
                  ))}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
