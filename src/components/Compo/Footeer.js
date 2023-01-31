
import React from 'react';
import '../../Styles/Footeer.css';

function Footeer() {

  const currentYear = new Date().getFullYear();

  return (
    <>
    <div className='divfooter'>
    <footer className="footer">
      <div className="footer-container">
        <p>Copyright © {currentYear} FerroElectricos Olaya</p>
        <nav>
          <a href="/PagDefault">Acerca de</a>
          <a href="/PagDefault">Contacto</a>
          <a href="/PagDefault">Política de privacidad</a>
        </nav>
      </div>
    </footer>
    </div>
    
  </>
  );
}

export default Footeer;