import { useFilters } from "../hooks/useFilters.js";
import { useCart } from "../hooks/useCart.js";
import "./Footer.css";

export function Footer() {
  //const { filters } = useFilters();
  const { cart } = useCart();
  return (
    <footer className="footer">
      {" "}
      <h4>
        Prueba tecnica de React * <span>@jose</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
    /* con el footer de arriba hacemos que los filtros se visualicen respecto al cambio  */

    /*     <footer className="footer">
      <h4>
        Prueba tecica react <span>@jose</span>
      </h4>
      <h5>shopping car con useContext y use reducers</h5>
    </footer> */
  );
}
