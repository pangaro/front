import React from "react";
import { useDispatch } from "react-redux";
import { categoriaAdd } from "../../actions/categoria.js";
import { categorias } from "../../db.js";
import { useForm } from "../../hooks/useForm.js";
import { CategoriaItem } from "./CategoriaItem.js";



export const CategoriaScreen = () => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    categoria: "",
    descripcion: "",
  });

  const { categoria, descripcion } = formValues;

  const handleAgregar = (e) => {
    e.preventDefault();

    dispatch(categoriaAdd(categoria, descripcion));
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
                className="form-control form-control-sm"
                type="text"
                name="categoria"
                value={categoria}
                autoComplete="off"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="form-control form-control-sm"
                type="text"
                name="descripcion"
                value={descripcion}
                autoComplete="off"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <span
                className="btn btn-sm btn-success float-none"
                type="submit"
                onClick={handleAgregar}
              >
                Agregar
              </span>
            </td>
          </tr>

          {categorias.recordset.map((categoria) => (
            <CategoriaItem key={categoria.Categoria} categoria={categoria} />
          ))}
        </tbody>
      </table>
    </form>
  );
};
