import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useForm } from "../../hooks/useForm.js";
import { AmountItem } from "./AmountItem.js";
import { montoStartLoading } from "../../actions/monto.js";
import { gTipoLoadedStartLoading, mHorariaLoadedStartLoading, dServicioLoadedStartLoading } from "../../actions/selectOptions";

export const AmountScreen = () => {

  const { gTipo, mHoraria, dServicio } = useSelector((state) => state.sel);

  const { monts } = useSelector((state) => state.mont);

  const modalidadHorariaID = [
    {
      value: 8,
      label: 8,
    },
    {
      value: 12,
      label: 12,
    },
    {
      value: 16,
      label: 16,
    },
  ];

  const dispatch = useDispatch();

  const [formValues, handleInputChange, dropDownChange, reset] = useForm({
    CategoriaMontosID: "",
    Categoria: "",
    Anio: new Date().getFullYear(),
    ModalidadHorariaID: "",
    DiasServicioID: "",
    GuardiaTipoID: "",
    Monto: "",
  });

  const {
    CategoriaMontosID,
    Categoria,
    Anio,
    ModalidadHorariaID,
    DiasServicioID,
    GuardiaTipoID,
    Monto,
  } = formValues;


  dispatch(gTipoLoadedStartLoading());
  useEffect(() => {
    dispatch(mHorariaLoadedStartLoading());
    dispatch(dServicioLoadedStartLoading());
    dispatch(montoStartLoading({ Anio }));
  }, []);

  const handleAgregar = (e) => {
    e.preventDefault();
    // if (Categoria ==='' || Descripcion === '') {
    //   return }

    //   dispatch(categoriaStartAddNew(formValues));
    //   reset();
  };

  // const handleModificar = (values) => {
  //   dispatch(categoriaStartUpdate(values));

  //   dispatch(categoriaClearActive());
  // };

  // const stateButton = (value) => {
  //   const btnAgregar = document.querySelector("#btnAgregar");
  //   value === true
  //     ? btnAgregar.classList.add("disabled")
  //     : btnAgregar.classList.remove("disabled");
  // };
  // const dropDownChange = (value) => {
  //   console.log(value)
  // }
  return (
    <>
      <h1 className="h3 mb-3">gestión categoria / montos</h1>
      <div className="row">
        <div className="col-12">
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
                      <input
                        className="form-control"
                        type="text"
                        name="Categoria"
                        value={Categoria}
                        autoComplete="off"
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      {/* <Select
                        options={modalidadHorariaID}
                        name="ModalidadHorariaID"
                        // value={modalidadHorariaID}
                        onChange={(e) => dropDownChange({
                          'name':'ModalidadHorariaID',
                          'value':e.value
                        })}
                      /> */}
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        name="DiasServicioID"
                        value={DiasServicioID}
                        autoComplete="off"
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <Select
                        // options={modalidadHorariaID}
                        // name="GuardiaTipoID"
                        // value={GuardiaTipoID}
                        // autoComplete="off"
                        onChange={dropDownChange}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
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
                      // action={handleModificar}
                      // stateButton={stateButton}
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
