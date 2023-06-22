import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import "./Cart.css";
import { useId } from "react";
import { useCart } from "../hooks/useCart.js";

export function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small >Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
        {/*  el cartIcon coloca el carrito azul en la esquina */}
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map((product) => (
           /*  en pocas palabras a cart lo estamos llamando product */
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
      
    </>
  );
}
