import { useState, useEffect } from "react";
import axios from "axios";

const Egreso = () => {
  const [ingreso, setIngreso] = useState([]);

  const search = 4

  useEffect(() => {
    axios
      .get(`http://localhost:8081/ingreso/searchByPresupuesto/${search}`)
      .then((response) => {
        setIngreso(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="ingreso">
      <h2 class="ingreso_titulo">Ingresos</h2>
      <div id="lista-ingresos">
        {ingreso.map((ingreso) => {
          return(
          <div key={ingreso.id}>
            <div class="elemento limpiarEstilos">
              <div class="elemento_descripcion">{ingreso.descripcion}</div>
              <div class="derecha limpiarEstilos">
                <div class="elemento_valor">+ {ingreso.valor}</div>
                <div class="elemento_eliminar">
                  <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export const anotherIngreso = () => {
  return (
    <div class="ingreso">
      <h2 class="ingreso_titulo">Ingresos</h2>
      <div id="lista-ingresos">
        <div class="elemento limpiarEstilos">
          <div class="elemento_descripcion">Salario</div>
          <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ 2,200.00</div>
            <div class="elemento_eliminar">
              <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        <div class="elemento limpiarEstilos">
          <div class="elemento_descripcion">Venta coche</div>
          <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ 1,500.00</div>
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
