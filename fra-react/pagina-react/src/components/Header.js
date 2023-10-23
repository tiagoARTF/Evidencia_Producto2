import React from 'react';/*Esta línea importa la biblioteca React y 
hace que esté disponible en este archivo.*/



function Header() { /*Definimos una función que se convierte en un componente*/
  return ( /* la función nos devuelve los elementos de la interfaz*/

  /**Apartir de aqui definimos la estructura de nuestro 
   * header que contiene un div el cual tiene una clase,
   * y dentro del div tenemos una etiqueta nav tambien con su clase, dentro de esta 
   * encontramos una lista que muestra el menu de navegación de nuestra página.
  */
    <header>
    <div className='header-container'>
      <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
    <span class="text" data-v-608f1a0f="">React</span>
      <nav class="menu">
        <ul>
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>contacto</li>
        </ul>
      </nav>
    </div>
    </header>
  );
}

/*Aqui al final definos la exportación de nuestro 
componente header para usarlo en nuestra app */
export default Header;
