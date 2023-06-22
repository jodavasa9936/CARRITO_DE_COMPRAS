export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id == id);
      if (productInCartIndex >= 0) {
        /* si el producto esta en el carrito es 
        decir si productInCartIndex>=0 
        cuando es 0 o mayor es que podrmos presionar el boton +*/
        const newState = structuredClone(state);
        /* el structuredClone hace copias profundas de los 
        arrays y los objetos  y por lo tanto quedariamos con un carrito nuevo */
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState);
        /* aqui estamos clonando el dato para que se puedan pedir 
      por ejemplo dos unidades del mismo producto */
        return newState;
      } //el producto no esta en el carrito

      const newState = [
        ...state,
        {
          ...actionPayload, //product
          quantity: 1,
        },
      ];
      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTIONS_TYPES.CLEAR_CART: {
      updateLocalStorage([]);
      return [];
    }
  }
  return state;
};
