import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { categoriaClearActive, categoriaSetActive, CategoriaStartDelete, categoriaStartUpdate } from "../../actions/categoria";
import { categoriaStartLoading } from './../../actions/categoria';

export const CategoriaItem = ({ categoria }) => {



  const dispatch = useDispatch()

  const { Categoria, Descripcion } = categoria;

  const handleEdit = (c) => {
    const tdDescripcion = document.getElementById(`desc_${c.Categoria}`);
    const btnEdit = document.getElementById(`btnEdit_${c.Categoria}`);
    const btnConfirm = document.getElementById(`btnConfirm_${c.Categoria}`);
    const descripcionData = tdDescripcion.innerHTML;
    
   btnEdit.classList.add('d-none')
   btnConfirm.classList.remove('d-none')

  tdDescripcion.innerHTML=`
    <input type="text" class="form-control" id="descripcion_text_${c.Categoria}" value="${descripcionData}">
  `;

  dispatch( categoriaSetActive( c ) );

};

  const handleDelete = (c) => {

    dispatch( categoriaSetActive( c ) );

    dispatch( CategoriaStartDelete())
  };

  const handleConfirm = (c) => {

    const valDescripcion = document.getElementById(
      `descripcion_text_${c.Categoria}`
      ).value;
      const btnEdit = document.getElementById(`btnEdit_${c.Categoria}`);
      const btnConfirm = document.getElementById(`btnConfirm_${c.Categoria}`);
      
      document.getElementById(`desc_${c.Categoria}`).innerHTML = valDescripcion;

      btnEdit.classList.remove("d-none");
      btnConfirm.classList.add("d-none");

      dispatch(categoriaStartUpdate({
        Descripcion:valDescripcion
      }))

      dispatch(categoriaClearActive())
  };
  

  return (

    <tr>
      <td id={`cat_${Categoria}`}>
        {Categoria}
      </td>
      <td id={`desc_${Categoria}`}>
        {Descripcion}
      </td>
      <td className="table-action">
        <div className="btn-group btn-group-sm mb-1" style={{ float: "none" }}>
          <span
            id={`btnEdit_${Categoria}`}
            className="btn btn-sm btn-secondary me-1"
            onClick={ () => handleEdit(categoria)}
            data-toggle="tooltip"
            data-placement="bottom"
            title="editar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-edit-2 align-middle"
            >
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
          </span>
          <span
            className="btn btn-sm btn-danger me-1"
            onClick={() => handleDelete(categoria)}
            data-toggle="tooltip"
            data-placement="bottom"
            title="eliminar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-trash align-middle"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </span>
        </div>
        <span 
        id={`btnConfirm_${Categoria}`}
        className="btn btn-sm btn-success float-none d-none"
        onClick={ () => handleConfirm(categoria)}
        >Confirmar</span>
      </td>
    </tr>
  );
};
