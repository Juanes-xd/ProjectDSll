import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useContext } from 'react';

function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    return (
        <Card border="secondary " style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={product.img} />
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">En el carrito: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button variant="success" sm="5" onClick={() => cart.addOneToCart(product.id)} className="mx-1">+</Button>
                                <Button variant="danger" sm="5" onClick={() => cart.removeOneFromCart(product.id)} className="mx-1">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Eliminar del carrito</Button>
                    </>
                    :
                    <Button variant="success" onClick={() => cart.addOneToCart(product.id)}>Añadir</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard;