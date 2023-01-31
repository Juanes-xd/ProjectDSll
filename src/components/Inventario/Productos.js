import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Nabvar";
import { Row, Col } from "react-bootstrap";
import { productsArray } from "./productStore";
import ProductCard from "./ProductCard";

import CartProvider from "./CartContext";
import Footeer from "../Compo/Footeer";

import CategoriasNab from '../Compo/CategoriasNab'

import "../../Styles/InventarioStyles.css";

const Productos = () => {
  return (
    <>
      <main className="containerProductos">
        <CartProvider>
          {/* <h1 align="center" className="p-3">
          
        </h1> */}

          
          <NavbarComponent  />
          <CategoriasNab/>

          <section className="busqueda">
            <div className="MotoBusqueda">
              <p className="words">Motor de busqueda</p>

              <p className="words"> Filtrar precio</p>

              <p className="words">Mostrar mas opciones</p>
            </div>

            <div className="BusBusqueda">
              <p className="busq">¿Buscas algo y no lo encuentras?</p>
            </div>
          </section>

          <section className="tarjetas">
            <Row xs={1} md={3} className="g-4">
              {productsArray.map((product, idx) => (
                <Col align="center" key={idx}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </section>

          <section className="futer">
            <Footeer />
          </section>
        </CartProvider>
      </main>
    </>
  );
};

export default Productos;
