import { React, useEffect, useState } from "react";
import "../../Styles/HomeStyles.css";
import Navbar from "../Compo/Navbar";
import Carousel from "../Compo/Carousel";
import Card from "../Compo/Cards";
import Footeer from "../Compo/Footeer.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Homep = () => {
  //Esta parte tiene que ser cambiada a la tabla de la base de datos
  const navigate = useNavigate();
  const token = localStorage.getItem("x-access-token");
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const result = await axios.get("http://localhost:4000/products");
    setProduct(result.data);
  };

  const handleButtonClick = (cardId) => {
    if (!token) return navigate("/");
    console.log(`Button clicked for card with id ${cardId}!`);
  };

  return (
    <>
      <section className="home">
        <div className="NavbarHome">
          <Navbar />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-charcter"> Promociones</h3>
            </div>
          </div>
        </div>

        <div className="carruselHome">
          <Carousel />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-charcter2"> Productos</h3>
            </div>
          </div>
        </div>

        <div className="card-container">
          {product.map((product) => (
            <Card
              key={product.id}
              imageUrl={product.imagen}
              title={product.title}
              description={product.descripcion + " " + product.precio}
              buttonText="Click me!"
              onButtonClick={() => handleButtonClick(product.id)}
            />
          ))}
        </div>

        <Footeer />
      </section>
    </>
  );
};

export default Homep;
