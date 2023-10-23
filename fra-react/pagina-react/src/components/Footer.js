import React from 'react';/*Esta línea importa la biblioteca React y 
hace que esté disponible en este archivo.*/
import '../css/footer.css';/*Esta importa el css de para una mejor apariencia*/

function Footer() { /*Aqui definimos una función llamada footer que 
al igual que el header se convierte en un componente*/

  return (/*Devolvemos el contenido de la interfaz */

  /*Aqui creamos un pie de pagina estructurado dentro de su etiqueta footer y dos div
  con sus clases que nos permiten ser mencionados en el css para darle una mejor apariencia,
  y dentro de los div  creamos unos simples parrafos con información basica */
  <footer>
  <div class="footer-container">
    <div class="footer-info">
      <p>&copy; 2023 Framework React</p>
      <p>Contactanos: +32344343</p>
      <p>Correo: proyecto@react.com</p>
    </div>
  </div>
</footer>
  );
}

/*Exportamos el Footer para poder usarlo en toda nuestra app */
export default Footer;
