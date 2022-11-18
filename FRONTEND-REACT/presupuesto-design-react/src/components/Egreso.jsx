import { useState, useEffect } from "react";
import axios from "axios";

const Egreso = () => {
  const [egreso, setEgreso] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/egreso/`)
      .then((response) => {
        setEgreso(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="egreso">
      <h2 class="egreso_titulo">Egresos</h2>
      <div id="lista-egresos">
        {egreso.map((egreso) => {
          return (
            <div class="elemento limpiarEstilos">
              <div class="elemento_descripcion">{egreso.descripcion}</div>
              <div class="derecha limpiarEstilos">
                <div class="elemento_valor">- {egreso.valor}</div>
                <div class="elemento_porcentaje">21%</div>
                <div class="elemento_eliminar">
                  <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const anotherEgreso = () => {
  return (
    <div class="egreso">
      <h2 class="egreso_titulo">Egresos</h2>
      <div id="lista-egresos">
        <div class="elemento limpiarEstilos">
          <div class="elemento_descripcion">Renta departamento</div>
          <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- 900.00</div>
            <div class="elemento_porcentaje">21%</div>
            <div class="elemento_eliminar">
              <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        <div class="elemento limpiarEstilos">
          <div class="elemento_descripcion">Ropa</div>
          <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- 400.00</div>
            <div class="elemento_porcentaje">10%</div>
            <div class="elemento_eliminar">
              <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Egreso;
