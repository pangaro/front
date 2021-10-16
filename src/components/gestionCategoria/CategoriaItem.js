import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  categoriaSetActive,
  CategoriaStartDelete,
  categoriaStartLoading,
} from "../../actions/categoria";

export const CategoriaItem = ({ categoria, action, stateButton }) => {
  const dispatch = useDispatch();

  const { catActive } = useSelector((state) => state.cat);

  const { Categoria, Descripcion } = categoria;

  const trs = document.querySelectorAll("tr[name='trTable']");

  const btnsEdit = document.querySelectorAll("span[name='btnEdit']");
  const btnsDelete = document.querySelectorAll("span[name='btnDelete']");

  useEffect(() => {
    dispatch(categoriaStartLoading());
  }, [dispatch]);

  const handleEdit = (c) => {
    const tdDescripcion = document.getElementById(`desc_${c.Categoria}`);
    const descripcionData = tdDescripcion.innerHTML;
    stateButton(true);

    btnsEdit.forEach((btnE) => {
      if (btnE.id !== `btnEdit_${c.Categoria}`) {
        btnE.classList.remove("d-none");
        btnE.classList.add("disabled");
      } else {
        btnE.classList.add("d-none");
      }
    });

    btnsDelete.forEach((btnD) => {
      if (btnD.id !== `btnDelete_${c.Categoria}`) {
        btnD.classList.remove("d-none");
        btnD.classList.add("disabled");
      } else {
        btnD.classList.add("d-none");
      }
    });

    const btnConfirm = document.querySelector(`#btnConfirm_${c.Categoria}`);
    btnConfirm.classList.remove("d-none");

    const btnCancel = document.querySelector(`#btnCancel_${c.Categoria}`);
    btnCancel.classList.remove("d-none");

    tdDescripcion.innerHTML = `
    <input 
      type="text" 
      name="descripcion_text"
      class="form-control" 
      id="descripcion_text_${c.Categoria}" 
      value="${descripcionData}"
    >
  `;

    trs.forEach((tr) => {
      const padre = tr.children[1];
      if (tr.id !== c.Categoria) {
        if (padre.children[0]) {
          const hijo = padre.children[0].value;
          padre.removeChild(padre.children[0]);
          padre.innerHTML = hijo;
        }
      }
    });

    dispatch(categoriaSetActive(c));
  };

  const handleDelete = (c) => {
    Swal.fire({
      title: "Estás seguro?",
      text: "No prodrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(categoriaSetActive(c));

        dispatch(CategoriaStartDelete());
      }
    });
  };

  const handleCancel = (c) => {
    stateButton(false);
    const tdAction = document.getElementById(`action_${c.Categoria}`);

    const div1 = tdAction.children[0];
    const div2 = tdAction.children[1];

    div1.children[0].classList.remove("d-none");
    div1.children[1].classList.remove("d-none");

    div2.children[0].classList.add("d-none");
    div2.children[1].classList.add("d-none");

    trs.forEach((tr) => {
      const padre = tr.children[1];
      if (tr.id === c.Categoria) {
        if (padre.children[0]) {
          padre.removeChild(padre.children[0]);
          padre.innerHTML = catActive.Descripcion;
        }
      }
    });
    btnsEdit.forEach((btnE) => {
      if (btnE.id !== `btnEdit_${c.Categoria}`) {
        btnE.classList.remove("disabled");
      }
    });

    btnsDelete.forEach((btnD) => {
      if (btnD.id !== `btnDelete_${c.Categoria}`) {
        btnD.classList.remove("disabled");
      }
    });
  };

  const handleConfirm = (c) => {
    stateButton(false);
    const valDescripcion = document.getElementById(
      `descripcion_text_${Categoria}`
    ).value;

    const btnDelete = document.getElementById(`btnDelete_${Categoria}`);
    const btnConfirm = document.getElementById(`btnConfirm_${Categoria}`);
    const btnCancel = document.getElementById(`btnCancel_${Categoria}`);

    document.getElementById(`desc_${Categoria}`).innerHTML = valDescripcion;

    btnConfirm.classList.add("d-none");
    btnCancel.classList.add("d-none");

    action({
      Categoria: Categoria,
      Descripcion: valDescripcion,
    });

    btnsEdit.forEach((btnE) => {
      if (btnE.id !== `btnEdit_${c.Categoria}`) {
        btnE.classList.remove("disabled");
      } else {
        btnE.classList.remove("d-none");
      }
    });

    btnsDelete.forEach((btnD) => {
      if (btnD.id !== `btnDelete_${c.Categoria}`) {
        btnD.classList.remove("disabled");
      } else {
        btnDelete.classList.remove("d-none");
      }
    });
  };

  return (
    <tr id={Categoria} name="trTable">
      <td id={`cat_${Categoria}`}>{Categoria}</td>
      <td id={`desc_${Categoria}`}>{Descripcion}</td>
      <td id={`action_${Categoria}`} className="table-action">
        <div className="btn-group btn-group-sm mb-1" style={{ float: "none" }}>
          <span
            id={`btnEdit_${Categoria}`}
            name="btnEdit"
            className="btn btn-sm btn-secondary me-1"
            onClick={() => handleEdit(categoria)}
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
            id={`btnDelete_${Categoria}`}
            name="btnDelete"
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
        <div className="btn-group btn-group-sm mb-1" style={{ float: "none" }}>
          <span
            id={`btnConfirm_${Categoria}`}
            name="btnConfirm"
            className="btn btn-sm btn-success me-1 d-none"
            onClick={() => handleConfirm(categoria)}
            data-toggle="tooltip"
            data-placement="bottom"
            title="confirmar"
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
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            </svg>
          </span>
          <span
            id={`btnCancel_${Categoria}`}
            name="btnCancel"
            className="btn btn-sm btn-danger d-none"
            onClick={() => handleCancel(categoria)}
            data-toggle="tooltip"
            data-placement="bottom"
            title="cancelar"
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
              <path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" />
            </svg>
          </span>
        </div>
      </td>
    </tr>
  );
};
