import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Swal from "sweetalert2";
import {
  montoClearActive,
  montoSetActive,
  montoStartDelete,
  montoStartLoading,
} from "../../actions/monto";

export const AmountItem = ({ monto, action, stateButton, anio }) => {
  const dispatch = useDispatch();

  const { catSel, mHoraria, gTipo, dServicio } = useSelector(
    (state) => state.sel
  );

  // const { montActive } = useSelector((state) => state.mont);

  const {
    CategoriaMontosID,
    Categoria,
    ModalidadHorariaID,
    DiasServicioID,
    DiasServicio,
    GuardiaTipoID,
    GuardiaTipo,
    Monto,
  } = monto;

  const dropDownChange = (e) => {
    console.log(e);
  };

  const btnsEdit = document.querySelectorAll("span[name='btnEdit']");
  const btnsDelete = document.querySelectorAll("span[name='btnDelete']");

  useEffect(() => {
    dispatch(montoStartLoading(anio));
  }, [dispatch]);

  const handleEdit = (c) => {
    const tr = document.getElementById(`${c.CategoriaMontosID}`);
console.log(c.CategoriaMontosID)
    for (let i = 0; i < tr.children.length - 1; i++) {
      tr.children[i].children[0].classList.add("d-none");
      tr.children[i].children[1].classList.remove("d-none");
    }

    stateButton(true);

    btnsEdit.forEach((btnE) => {
      if (btnE.id !== `btnEdit_${c.CategoriaMontosID}`) {
        btnE.classList.remove("d-none");
        btnE.classList.add("disabled");
      } else {
        btnE.classList.add("d-none");
      }
    });

    btnsDelete.forEach((btnD) => {
      if (btnD.id !== `btnDelete_${c.CategoriaMontosID}`) {
        btnD.classList.remove("d-none");
        btnD.classList.add("disabled");
      } else {
        btnD.classList.add("d-none");
      }
    });

    const btnConfirm = document.querySelector(
      `#btnConfirm_${c.CategoriaMontosID}`
    );
    btnConfirm.classList.remove("d-none");

    const btnCancel = document.querySelector(
      `#btnCancel_${c.CategoriaMontosID}`
    );
    btnCancel.classList.remove("d-none");

    dispatch(montoSetActive(c));
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
        dispatch(montoSetActive(c));

        dispatch(montoStartDelete());
      }
    });
  };

  const handleCancel = (c) => {
    stateButton(false);

    const tdAction = document.getElementById(`action_${c.CategoriaMontosID}`);

    const div1 = tdAction.children[0];
    const div2 = tdAction.children[1];

    div1.children[0].classList.remove("d-none");
    div1.children[1].classList.remove("d-none");

    div2.children[0].classList.add("d-none");
    div2.children[1].classList.add("d-none");

    const tr = document.getElementById(`${c.CategoriaMontosID}`);

    for (let i = 0; i < tr.children.length - 1; i++) {
      tr.children[i].children[0].classList.remove("d-none");
      tr.children[i].children[1].classList.add("d-none");
    }

    btnsEdit.forEach((btnE) => {
      if (btnE.id !== `btnEdit_${c.CategoriaMontosID}`) {
        btnE.classList.remove("disabled");
      }
    });

    btnsDelete.forEach((btnD) => {
      if (btnD.id !== `btnDelete_${c.Categoria}`) {
        btnD.classList.remove("disabled");
      }
    });
    dispatch(montoClearActive());
  };

  const handleConfirm = (c) => {
    stateButton(false);

    const tr = document.getElementById(`${c.CategoriaMontosID}`);

    for (let i = 0; i < tr.children.length - 1; i++) {
      tr.children[i].children[0].classList.remove("d-none");
      tr.children[i].children[1].classList.add("d-none");

    }
    const btnDelete = document.getElementById(`btnDelete_${CategoriaMontosID}`);
    const btnConfirm = document.getElementById(
      `btnConfirm_${CategoriaMontosID}`
    );
    const btnCancel = document.getElementById(`btnCancel_${CategoriaMontosID}`);

    btnConfirm.classList.add("d-none");
    btnCancel.classList.add("d-none");

    action({
      Categoria: tr.children[0].children[1].children[3].value,
      Anio: anio,
      ModalidadHorariaID: tr.children[1].children[1].children[3].value,
      DiasServicioID: tr.children[2].children[1].children[3].value,
      GuardiaTipoID: tr.children[3].children[1].children[3].value,
      Monto: tr.children[4].children[1].value,
    });

    btnsEdit.forEach((btnE) => {
      if (btnE.id !== `btnEdit_${c.CategoriaMontosID}`) {
        btnE.classList.remove("disabled");
      } else {
        btnE.classList.remove("d-none");
      }
    });

    btnsDelete.forEach((btnD) => {
      if (btnD.id !== `btnDelete_${c.CategoriaMontosID}`) {
        btnD.classList.remove("disabled");
      } else {
        btnDelete.classList.remove("d-none");
      }
    });
  };

  return (
    <tr id={CategoriaMontosID} name="trTable">
      <td id={`cat_${CategoriaMontosID}`}>
        <span>{Categoria}</span>
        <Select
          options={catSel}
          name="Categoria"
          className="d-none"
          value={{ value: Categoria, label: Categoria }}
          onChange={(e) =>
            dropDownChange({
              name: "Categoria",
              value: e.value,
            })
          }
        />
      </td>
      <td id={`mHoraria_${CategoriaMontosID}`}>
        <span>{ModalidadHorariaID}</span>
        <Select
          options={mHoraria}
          name="ModalidadHorariaID"
          className="d-none"
          value={{ value: ModalidadHorariaID, label: ModalidadHorariaID }}
          onChange={(e) =>
            dropDownChange({
              name: "ModalidadHorariaID",
              value: e.value,
            })
          }
        />
      </td>
      <td id={`dServicio_${CategoriaMontosID}`}>
        <span>{DiasServicio}</span>
        <Select
          options={dServicio}
          name="DiasServicioID"
          className="d-none"
          value={{ value: DiasServicioID, label: DiasServicio }}
          onChange={(e) =>
            dropDownChange({
              name: "DiasServicioID",
              value: e.value,
            })
          }
        />
      </td>
      <td id={`gTipo_${CategoriaMontosID}`}>
        <span>{GuardiaTipo}</span>
        <Select
          options={gTipo}
          name="GuardiaTipoID"
          className="d-none"
          value={{ value: GuardiaTipoID, label: GuardiaTipo }}
          onChange={(e) =>
            dropDownChange({
              name: "GuardiaTipoID",
              value: e.value,
            })
          }
        />
      </td>
      <td id={`mont_${CategoriaMontosID}`}>
        <span>{Monto}</span>
        <input
          type="text"
          name="monto_text"
          className="form-control d-none"
          id={`monto_text_${CategoriaMontosID}`}
          defaultValue={`${Monto}`}
        />
      </td>
      <td id={`action_${CategoriaMontosID}`} className="table-action">
        <div className="btn-group btn-group-sm mb-1" style={{ float: "none" }}>
          <span
            id={`btnEdit_${CategoriaMontosID}`}
            name="btnEdit"
            className="btn btn-sm btn-secondary me-1"
            onClick={() => handleEdit(monto)}
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
            id={`btnDelete_${CategoriaMontosID}`}
            name="btnDelete"
            className="btn btn-sm btn-danger me-1"
            onClick={() => handleDelete(monto)}
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
            id={`btnConfirm_${CategoriaMontosID}`}
            name="btnConfirm"
            className="btn btn-sm btn-success me-1 d-none"
            onClick={() => handleConfirm(monto)}
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
            id={`btnCancel_${CategoriaMontosID}`}
            name="btnCancel"
            className="btn btn-sm btn-danger d-none"
            onClick={() => handleCancel(monto)}
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
