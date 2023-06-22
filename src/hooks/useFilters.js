import {useContext} from 'react'
import { FiltersContext } from '../context/filters';


export function useFilters () {
  

    const {filters,setFilters} = useContext(FiltersContext)
    
    
    
    
    
      const filterProducts = (products) => {
        /* ey es basico de javaScript, apenas das el parametro
        initialProducts, automaticamente ese troma el valor
         de products pedazo de pendejo. */
        return products.filter((product) => {
          return (
            product.price >= filters.minPrice &&
            (filters.category == "all" || product.category == filters.category)
            /* lo que hay dentro del 
          return es una condicion practicamente */
            /* filter nos permitye filtrar un array 
          products.filter(product => { */
            /* cuales son los productos que debemos filtrar?
          vamos a devolver los productos que sean mayor o igual
          al minPrice  */
            /* y mostraremos aquellos productos cuando 
          filters.category == 'all' y filters.category */
          );
        }); 
      };
    
      return {filters, filterProducts, setFilters}
    
    }