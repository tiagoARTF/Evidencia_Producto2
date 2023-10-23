import React from 'react';/*Esta línea importa la biblioteca React y 
hace que esté disponible en este archivo.*/

function Body() { /*Aqui definimos una función llamada body que al igual que el header
se convierte en un componente*/
  return ( /*la función nos devuelve los elementos de la interfaz*/

  /*Aqui creamos un contenedor que contiene un titulo y un parrafo dentro de un div
  que tiene una clase llamada container que nos permite hacer mención de nuestro div 
  en la app*/
    <div class="container">
      <h1>Bienvenido, esta es una pagina web minimalista hecha con React</h1>
      <p>Este es el contenido de la Aplicación en React</p>
    </div>
  );
}
/*Aqui al final definos la exportación de nuestro 
componente Body para usarlo en nuestra app*/
export default Body;
