<template><!--Define la estructra del componente-->

  <!--Aqui creamos un contenedor que contiene un titulo y un parrafo 
  dentro de un div que tiene una clase llamada container que nos permite
  hacer mención de nuestro div en la app-->
    <div class="container">
      <h1>Bienvenido, esta es una pagina web minimalista hecha con Vue</h1>
      <p>Este es el contenido de la Aplicación en Vue</p>
    </div>
  </template>
  
  <script>/*Contiene la configuración y la lógica del componente.
  Aquí, se establece el nombre del componente como 'PageBody', 
  que se utilizará para identificarlo en la aplicación.*/
  export default {
    name: 'PageBody', 
  }
  </script>
  
  <!--Estilos específicos para este componente, si es necesario-->
  <style scoped>
.container {
  background: url(../assets/Vue.png);/*Agrega una imagen de fondo
  en el contenedor */
  padding: 18rem;
}
.App {
text-align: center; /*Centra el texto */
background-color: aqua;/* cambiar el color de fondo */
}
  h1, p{
    color: antiquewhite;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
}
  </style>
  