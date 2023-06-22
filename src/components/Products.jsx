import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";

export function Products({ products }) {
  const { addToCart, cart,  removeFromCart} = useCart();

  const  checkProductInCart = (product) => {
    return cart.some((item) => item.id == product.id);
    /* aqui vemos si el carrito que vamos a checkear 
    tiene un item con un id del producto que vamos
    a checkear */
  };

  return (
    <main className="products">
      <ul> 
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}> 
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong>- ${product.price}
              </div>
              <div>
                <button 
                style = {{backgroundColor: isProductInCart ? 'red' : '#89f'}}
                onClick={() => {
                  isProductInCart
                  ? removeFromCart(product)
                  : addToCart(product)
                }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
