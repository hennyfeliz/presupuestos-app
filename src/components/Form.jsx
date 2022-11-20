import axios from "axios";
import { useRef, useState } from "react";
import sendIcon from "./Resouces/Icons/icons8-send-60.png";

const Form = () => {
  const [valor, setValor] = useState("");
  const [data, setData] = useState([]);

  let value = 0;

  const put_valor = useRef("");
  const put_signo = useRef("");
  const put_descripcion = useRef("");

  const signos = [
    {
      id: 1,
      valor: "+",
    },
    {
      id: 2,
      valor: "-",
    },
  ];

  const postData = {
  }

  const agregarDato = () => {
    axios.get(`http://localhost:8081/presupuesto/4`).then((response) => {
      setData(response.data.content);
      console.log(response.data.content);
    });

    if (put_signo.current.value === "+") {
      value = data.valor + put_valor.current.value;
    } else {
      value = valor.valor - put_valor.current.value;
    }

    axios
      .patch(`http://localhost:8081/ingreso/searchByPresupuesto/4`, {
        valor: put_valor.current.value,
      })
      .then((response) => {
        alert("ingresado de manera exitosa!");
        console.log(response.data.content);
      })
      .catch((response) => {
        alert("error al ingresar");
        console.log(response.data.content);
      });
  };

  return (
    <form id="forma" onsubmit="return false;">
      <div class="agregar_contenedor">
        <select class="agregar_tipo" id="tipo" ref={put_signo}>
          {signos.map((signo) => {
            return (
              <option key={signo.id} value={signo.valor}>
                {signo.valor}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          class="agregar_descripcion"
          placeholder="Agregar Descripción"
          ref={put_descripcion}
        />
        <input
          type="number"
          class="agregar_valor"
          placeholder="Valor"
          ref={put_valor}
          step="any"
        />
        <button class="agregar_btn" onclick={agregarDato}>
          <img src={sendIcon} alt="send-icon" className="" />
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            alert(put_valor.current.value);
          }}
        >
          Click
        </button>
      </div>
    </form>
  );
};

export const optionComponent = () => {
  return (
    <select class="agregar_tipo" id="tipo">
      <option value="ingreso" selected>
        +
      </option>
      <option value="egreso">-</option>
    </select>
  );
};

export default Form;
