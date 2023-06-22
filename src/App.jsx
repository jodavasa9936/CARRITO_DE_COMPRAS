import { Header } from "./components/Header";
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.jsx";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config.js";
import { useFilters } from "./hooks/useFilters.js";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart.jsx";


function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);
  /* aqui estamos heredando products o parametro*/

  return (
    
     <CartProvider>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
        {IS_DEVELOPMENT && <Footer />}
        {/* footer es el mensaje que sale en la esquina inferior
      izquierda */}
     </CartProvider>
    
  );
}

export default App;
