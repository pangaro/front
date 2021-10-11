import React from "react";

export const CategoriaItem = ({ categoria }) => {
  const { Categoria, Descripcion } = categoria;

  const handleEdit = () => {
    console.log("editar");
  };

  const handleDelete = () => {
    console.log("eliminar");
  };

  return (
    <tr>
      <td>
        <span>{Categoria}</span>
        <input
          className="form-control form-control-sm"
          type="text"
          defaultValue={Categoria}
        />
      </td>
      <td>
        <span>{Descripcion}</span>
        <input
          className="form-control form-control-sm"
          type="text"
          defaultValue={Descripcion}
        />
      </td>
      <td className="table-action">
        <div className="btn-group btn-group-sm mb-1" style={{ float: "none" }}>
          <span
            className="btn btn-sm btn-secondary me-1"
            onClick={handleEdit}
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
            className="btn btn-sm btn-warning"
            onClick={handleDelete}
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
        <span className="btn btn-sm btn-danger float-none">Confirmar</span>
      </td>
    </tr>
  );
};
