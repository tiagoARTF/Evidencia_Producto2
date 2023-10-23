<template><!--Define la estructra del componente-->

<!--Aqui creamos un pie de pagina estructurado dentro de su etiqueta
footer y dos div con sus clases que les permiten ser mencionados en el css 
para darle una mejor apariencia, y dentro de los div  creamos unos simples 
parrafos con información basica -->
    <footer>
      <div class="footer-container">
        <div class="footer-content">
        </div>
        <div class="footer-info">
          <p>&copy; 2023 Framework Vue</p>
          <p>Contactanos: +32344343</p>
          <p>Correo: proyecto@vue.com</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>/*Contiene la configuración y la lógica del componente.
  Aquí, se establece el nombre del componente como 'PageFooter', 
  que se utilizará para identificarlo en la aplicación.*/
  export default {
    name: 'PageFooter',
  }
  </script>
  
  <!--Estilos específicos para este componente, si es necesario-->
  <style scoped>
  footer {
    background-color: #318052; /* Color de fondo del footer */
    color: #fff; /* Color del texto */
    padding: 5rem; /* Espaciado interno del footer */
  }
  
  .footer-container {
    max-width: 1200px; /* Ancho máximo del contenido */
    margin: 0 auto; /* Centrar el contenido horizontalmente */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-links a {
    text-decoration: none; /* Elimina el subrayado de los enlaces */
    color: #fff; /* Color de los enlaces */
  }
  
  .footer-info {
  display: flex;
  padding-right: 12rem;
}

.footer-info p {
  margin: 0 20px; /* Espacio horizontal entre los párrafos de información */
}
  </style>
  