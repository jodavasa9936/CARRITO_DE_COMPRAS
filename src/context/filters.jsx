import { useState, createContext } from "react";

//1 crear el contexto
export const FiltersContext = createContext();

// 2 crear el provider , para proveer el contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {/* value es un objeto desde alli se heredan los valores*/}
      {children}
    </FiltersContext.Provider>
  );
}
