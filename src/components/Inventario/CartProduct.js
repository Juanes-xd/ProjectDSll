import Button from "react-bootstrap/Button";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { getProductData } from "./productStore";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const cantidad = props.cantidad;
  const productData = getProductData(id);

  return (
    <>
      <h3>{productData.nombre}</h3>
      <p>{cantidad} Total</p>
      <p>${(cantidad * productData.precio).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Eliminar
      </Button>
      <hr></hr>
    </>
  );
}

export default CartProduct;
