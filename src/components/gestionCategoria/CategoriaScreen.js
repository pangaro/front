import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm.js";
import { CategoriaItem } from "./CategoriaItem.js";
import {
  categoriaClearActive,
  categoriaStartAddNew,
  categoriaStartLoading,
  categoriaStartUpdate,
} from "./../../actions/categoria";

export const CategoriaScreen = () => {
  const { cats } = useSelector((state) => state.cat);

  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    Categoria: "",
    Descripcion: "",
  });

  const { Categoria, Descripcion } = formValues;

  useEffect(() => {
    dispatch(categoriaStartLoading());
  }, [dispatch]);

  const handleAgregar = (e) => {
    e.preventDefault();

    dispatch(categoriaStartAddNew(formValues));
    reset();
  };

  const handleModificar = (values) => {
    dispatch(categoriaStartUpdate(values));

    dispatch(categoriaClearActive());
  };

  const stateButton = (value) => {
    const btnAgregar = document.querySelector('#btnAgregar');
    (value === true)
      ? btnAgregar.classList.add("disabled")
      : btnAgregar.classList.remove("disabled")
  }

  return (
    <form onSubmit={handleAgregar}>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr className="text-center">
            <th>Categoria</th>
            <th>Descripción</th>
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
              <input
                className="form-control"
                type="text"
                name="Descripcion"
                value={Descripcion}
                autoComplete="off"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <span id="btnAgregar"
                className="btn btn-sm btn-secondary float-none"
                type="submit"
                onClick={handleAgregar}
              >
                Agregar
              </span>
            </td>
          </tr>

          {cats.map((categoria, index) => (
            <CategoriaItem
              key={index}
              categoria={categoria}
              action={handleModificar}
              stateButton={stateButton}
            />
          ))}
        </tbody>
      </table>
    </form>
  );
};
