import { createContext, useState } from "react";
import { getProductData } from "./productStore";

export const CartContext = createContext({
  items: [],
  getProductcantidad: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // [ { id: 1 , cantidad: 3 }, { id: 2, cantidad: 1 } ]

  function getProductcantidad(id) {
    const cantidad = cartProducts.find(
      (product) => product.id === id
    )?.cantidad;

    if (cantidad === undefined) {
      return 0;
    }

    return cantidad;
  }

  function addOneToCart(id) {
    const cantidad = getProductcantidad(id);

    if (cantidad === 0) {
      // product is not in cart
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          cantidad: 1,
        },
      ]);
    } else {
      // product is in cart
      // [ { id: 1 , cantidad: 3 }, { id: 2, cantidad: 1 } ]    add to product id of 2
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, cantidad: product.cantidad + 1 } // if statement is true
              : product // if statement is false
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const cantidad = getProductcantidad(id);

    if (cantidad === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, cantidad: product.cantidad - 1 } // if statement is true
              : product // if statement is false
        )
      );
    }
  }

  function deleteFromCart(id) {
    // [] if an object meets a condition, add the object to array
    // [product1, product2, product3]
    // [product1, product3]
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.precio * cartItem.cantidad;
      return totalCost;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductcantidad,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
