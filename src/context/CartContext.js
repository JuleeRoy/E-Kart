import { createContext, useContext, useReducer, useEffect } from "react";
// import {reducer} from cartReducer
import reducer from "../reducers/cartReducer";
const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("myCart");
  if (localCartData.length === 0) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};
const initialState = {
    // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};
const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

//   add to cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // increment decrement

  const setIncrement=(id)=>{
    dispatch({type:"SET_INCREMENT",payload:id})
  }

  const setDecrement=(id)=>{
    dispatch({type:"SET_DECREMENT",payload:id})
  }

//   remove to cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };


   // to clear the cart
   const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // to add the data in localStorage
  // get vs set

  useEffect(() => {
    // dispatch({ type: "CART_TOTAL_ITEM" });
    // dispatch({ type: "CART_TOTAL_PRICE" });

    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("myCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem ,clearCart,setIncrement,setDecrement}}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { useCart, CartProvider };
