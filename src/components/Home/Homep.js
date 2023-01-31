import React from 'react'
import "../../Styles/HomeStyles.css";
import Navbar from '../Compo/Navbar'
import Carousel from '../Compo/Carousel';
import Card from '../Compo/Cards';
import Footeer from '../Compo/Footeer.js';

const Homep = () => {

  //Esta parte tiene que ser cambiada a la tabla de la base de datos
  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/300x200',
      title: 'Card 1',
      description: 'This is the first card.',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/300x200',
      title: 'Card 2',
      description: 'This is the second card.',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/300x200',
      title: 'Card 3',
      description: 'This is the third card.',
    },
  ];

  const handleButtonClick = (cardId) => {
    console.log(`Button clicked for card with id ${cardId}!`);
  };

  return (
    <>
    
      <section className='home'>

        <div className='NavbarHome'> 
        <Navbar/>
        </div>

         <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-charcter"> Promociones</h3>
            </div>
          </div>
        </div>

        <div className='carruselHome'> 
        <Carousel/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-charcter2"> Productos</h3>
            </div>
          </div>
        </div>

        <div className="card-container">
      {cardsData.map(cardData => (
        <Card
          key={cardData.id}
          imageUrl={cardData.imageUrl}
          title={cardData.title}
          description={cardData.description}
          buttonText="Click me!"
          onButtonClick={() => handleButtonClick(cardData.id)}
        />
      ))}
        </div>

        <Footeer/>

      </section>
    </>
  )
}

export default Homep


/*
se usa el hook `useEffect` para hacer una solicitud HTTP a la URL `https://your-backend.com/images/${props.imageId}` cada vez que la propiedad
`imageId` cambia. La respuesta se espera en formato `blob` y 
luego se crea una URL temporal para la imagen usando `URL.createObjectURL(new Blob([response.data]))`.

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Card.css';

const Card = (props) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    axios.get(`https://your-backend.com/images/${props.imageId}`, {
      responseType: 'blob'
    })
    .then(response => {
      const imgUrl = URL.createObjectURL(new Blob([response.data]));
      setImageUrl(imgUrl);
    })
    .catch(error => {
      console.log(error);
    });
  }, [props.imageId]);

  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={props.title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{props.title } </h3>
          <p className="card-description">{props.description}</p>
            <button className="card-button" onClick={props.onButtonClick}>{props.buttonText}</button>
      </div>
    </div>
  );
}

export default Card; */