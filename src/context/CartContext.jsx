import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = (children) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, amount) => {
    console.log(item, amount);
    const newCart = [...cart];
    const productoIsInCart = isInCart(item.id);
    if (productoIsInCart) {
      newCart[
        newCart.findIndex((prod) => prod.id === productoIsInCart.id)
      ].quantity += amount;
      setCart(newCart);
      return;
    }
    item.quantity = amount;
    setCart([...newCart, item]);
  };

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));
  const isInCart = (id) => cart.find((item) => item.id === id);
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeItem, clearCart }}
      {...children}
    ></CartContext.Provider>
  );
};

export default CartContextProvider;
