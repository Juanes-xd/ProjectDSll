import React from "react";
import "./InventarioStyles.css";
import Navbar from "../Compo/Navbar";
import Footeer from "../Compo/Footeer";

const Inventario = () => {
  return (
    <>
      <main className="containerProductos">
        <Navbar />

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

         <section className="futer">
        <Footeer/>
        </section>
      </main>
    </>
  );
};

export default Inventario;

/* const Inventario = ({inventario, toogleImportance}) => {
    const label = inventario.important
        ? 'make not important'
        : 'make important';

  return (
    <>  
    <li className='inventario'>
        <div>
            {inventario.content}
        </div>
        <button onClick={toogleImportance}>{label}</button>
    </li>
    </>
  )
}

export default Inventario */
