import { Button, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import CartProduct from "./CartProduct";
import Checkout from "../Checkout/checkout";
import "../../Styles/InventarioStyles.css";

function NavbarComponent() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.cantidad,
    0
  );
  const openchekout = (e) => {
    e.preventDefault();

    var handler = window.ePayco.checkout.configure({
      key: "efef92030f96cd757fa9d11d0e026571",
      test: true,
    });

    let data = {
      name: "Carrito",
      description: "Descripcion del carrito",
      currency: "cop",
      amount: "2000",
      tax_base: "1000",
      tax: "1000",
      country: "co",
      lang: "en",
      external: "false",
    };
    handler.open(data);
  };

  return (
    <>
      <div className="nabvitar">
        <Navbar expand="sm" bg="dark" variant="dark">
          <Navbar.Brand href="/">FerroElectricos</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="light" onClick={handleShow}>
              {" "}
              <i className={"fa-solid fa-cart-shopping"} /> {productsCount}{" "}
              Carrito
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items en el carrito:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.cantidad}
                ></CartProduct>
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant="success" onClick={openchekout}>
                ¡Pagar!
              </Button>
            </>
          ) : (
            <h1>No hay items en tu carrito!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
