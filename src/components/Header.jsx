import axios from 'axios';
import {useEffect, useState} from 'react'

const Header = () => {

  const [presupuesto, setPresupuesto] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8081/presupuesto/4`)
    .then((response) => {
      setPresupuesto(response.data[0])
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])


  return (
    <div class="cabecero">
      <div class="presupuesto">
        <div class="presupuesto_titulo">Presupuesto Disponible</div>
        <div class="presupuesto_valor" id="presupuesto">
          + {presupuesto.valor}
        </div>
        <div class="presupuesto_ingreso limpiarEstilos">
          <div class="presupuesto_ingreso--texto">Ingresos</div>
          <div class="derecha">
            <div class="presupuesto_ingreso--valor" id="ingresos">
              +4,000.00
            </div>
            <div class="presupuesto_ingreso--porcentaje">&nbsp;</div>
          </div>
        </div>
        <div class="presupuesto_egreso limpiarEstilos">
          <div class="presupuesto_egreso--texto">Egresos</div>
          <div class="derecha limpiarEstilos">
            <div class="presupuesto_egreso--valor" id="egresos">
              - 1,900.00
            </div>
            <div class="presupuesto_egreso--porcentaje" id="porcentaje">
              45%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
