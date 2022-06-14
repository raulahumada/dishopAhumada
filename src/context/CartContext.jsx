import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);
export const CartContextProvider = (children) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, amount) => {
    const newCart = [...cart];
    const productoIsInCart = isInCart(item.id);
    if (productoIsInCart) {
      newCart[
        newCart.findIndex((prod) => prod.id === productoIsInCart.id)
      ].quantity += amount;
      setCart(newCart);
      return;
    }
    item.quantity = item.quantity - amount;
    item.quantityOrder = amount;
    setCart([...newCart, item]);
    calculateTotalPrice();
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id != id);
    setCart(newCart);
  };
  const isInCart = (id) => cart.find((item) => item.id === id);
  const clearCart = () => setCart([]);
  const calculateTotalPrice = () => {
    var total = 0;
    cart.forEach(function (item) {
      total += item.price * item.quantityOrder;
    });
    return total;
  };

  const cleanCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeItem,
        clearCart,
        calculateTotalPrice,
        cleanCart,
      }}
      {...children}
    ></CartContext.Provider>
  );
};

export default CartContextProvider;
