import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { categoriaAdd } from "../../actions/categoria.js";
import { useForm } from "../../hooks/useForm.js";
import { CategoriaItem } from "./CategoriaItem.js";
import { categoriaStartAddNew, categoriaStartLoading } from './../../actions/categoria';


export const CategoriaScreen = () => {

  const { cats } = useSelector( state => state.cat );

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    Categoria: "",
    Descripcion: "",
  });

  const { categoria, descripcion } = formValues;

  useEffect(() => {
        
    dispatch( categoriaStartLoading() );

}, [ dispatch ])


  const handleAgregar = (e) => {
    e.preventDefault();

    dispatch( categoriaStartAddNew(formValues) );

  };

  
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
                value={categoria}
                autoComplete="off"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="form-control"
                type="text"
                name="Descripcion"
                value={descripcion}
                autoComplete="off"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <span
                className="btn btn-sm btn-secondary float-none"
                type="submit"
                onClick={ handleAgregar}
              >
                Agregar
              </span>
            </td>
          </tr>

          {cats.map((categoria,index) => (
            <CategoriaItem key={index} categoria={categoria} />
          ))}
        </tbody>
      </table>
    </form>
  );
};
