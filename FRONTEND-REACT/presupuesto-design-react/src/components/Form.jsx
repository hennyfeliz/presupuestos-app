


const Form = () => {

  const agregarDato = () => {

  }


  return (
    <form id="forma" onsubmit="return false;">
        <div class="agregar_contenedor">
          <select class="agregar_tipo" id="tipo">
            <option value="ingreso" selected>
              +
            </option>
            <option value="egreso">-</option>
          </select>
          <input
            type="text"
            class="agregar_descripcion"
            placeholder="Agregar Descripción"
            id="descripcion"
          />
          <input
            type="number"
            class="agregar_valor"
            placeholder="Valor"
            id="valor"
            step="any"
          />
          <button class="agregar_btn" onclick={agregarDato}>
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          </button>
        </div>
    </form>
  );
};

export default Form
