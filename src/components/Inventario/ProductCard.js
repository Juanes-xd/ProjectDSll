import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function ProductCard(props) {
  // props.product is the product we are selling
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const product = await axios.get("http://localhost:4001/products");
    setData(product.data);
  };
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductcantidad(data.id);
  console.log(cart.items);

  const token = localStorage.getItem("x-access-token");

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:4000/user`, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => console.log(data.nombre))
        .catch((error) => console.error(error));
    }
  }, [token]);

  return (
    <>
      {data.map((item) => (
        <Card border="secondary " style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={item.imagen} />
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>${item.precio}</Card.Text>
            {cart.getProductcantidad(item.id) > 0 ? (
              <>
                <Form as={Row}>
                  <Form.Label column="true" sm="6">
                    En el carrito: {cart.getProductcantidad(item.id)}
                  </Form.Label>
                  <Col sm="6">
                    <Button
                      variant="success"
                      sm="5"
                      onClick={() => cart.addOneToCart(item.id)}
                      className="mx-1"
                    >
                      +
                    </Button>
                    <Button
                      variant="danger"
                      sm="5"
                      onClick={() => cart.removeOneFromCart(item.id)}
                      className="mx-1"
                    >
                      -
                    </Button>
                  </Col>
                </Form>
                <Button
                  variant="danger"
                  onClick={() => cart.deleteFromCart(item.id)}
                  className="my-2"
                >
                  Eliminar del carrito
                </Button>
              </>
            ) : (
              <Button
                variant="success"
                onClick={() => cart.addOneToCart(item.id)}
              >
                Añadir
              </Button>
            )}
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default ProductCard;
