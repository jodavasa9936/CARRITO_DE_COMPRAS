import "./Filters.css";
import { useFilters } from "../hooks/useFilters";
import { useId } from "react";

export function Filters() {
  const {filters, setFilters} = useFilters()

  /* aqui configuramos la visualizacion del precio en rango */
  const minPriceFilteredId = useId()
  const categoryFilterId = useId()


console.log({
  minPriceFilteredId,
  categoryFilterId
})


  const handleChangeMinPrice = (event) => {

    setFilters((prevState) => ({
      ...prevState,
      /* prevState son los datos que vienen del useState 
      para actializar este caso solo sera minPrice */
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    //esto huele mal
    //etsamos pasando la funcion de actualizar estado
    //nativa de react a un componente hijo
    setFilters((prevState) => ({
      ...prevState,
      /* prevState son los datos que vienen del useState 
      para actializar este caso solo sera category */
      category: event.target.value,
    }));
  };

  return (
    <section className=".filters">
      <div>
        <label htmlFor={minPriceFilteredId}>Price</label>
        <span>${filters.minPrice}</span>
        {/*  aqui visualizamos el precio minimo */}
        <input
          type="range"
          id={minPriceFilteredId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
