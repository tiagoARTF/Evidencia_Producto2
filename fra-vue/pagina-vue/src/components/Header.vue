 <template><!--Define la estructra del componente-->

    <!--Apartir de aqui definimos la estructura de nuestro 
       * header que contiene un div el cual tiene una clase,
       * y dentro del div tenemos una etiqueta nav tambien con su clase, dentro de esta 
       * encontramos una lista que muestra el menu de navegación de nuestra página.-->
        <header>
          <div class="header-container">
            <svg class="logo" viewBox="0 0 128 128" width="40" height="40" data-v-608f1a0f=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-608f1a0f=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-608f1a0f=""></path></svg>
          |<span class="text" data-v-608f1a0f="">Vue.js</span>
            <nav class="menu">
              <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Contacto</li>
              </ul>
            </nav>
          </div>
        </header>
      </template>
      
      
      <script>/*Contiene la configuración y la lógica del componente.
      Aquí, se establece el nombre del componente como 'PageHeader', 
      que se utilizará para identificarlo en la aplicación.*/
      export default {
        name: 'PageHeader',
      }
      </script>
      
      <!-- Estilos específicos para este componente -->
      <style scoped>
      header {
        background-color: #302e2e; /* Color de fondo del header */
        color: #fff; /* Color del texto */
        padding: 1rem; /* Espaciado interno del header */
      }
      
      .header-container {
        max-width: 1200px; /* Ancho máximo del contenido */
        margin: 0 auto; /* Centrar el contenido horizontalmente */
        display: flex; /*establece el contenedor como un contenedor flexible */
        justify-content: space-between;/*alinear y distribuir los elementos hijos */
        align-items: center;/*alinear verticalmente los elementos*/
      }
      
      .menu {
        text-align: center; /* Centro el contenido horizontalmente */
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
      
      .menu ul {
        list-style: none; /* Elimina los puntos de la lista */
        padding: 0;
        display: flex;
        justify-content: center; /* Centra los elementos de la lista horizontalmente */
      }
      
      .menu li {
        margin: 0 20px; /* Espacio horizontal entre elementos del menú */
      }
      
      .menu a {
        text-decoration: none; /* Elimina el subrayado de los enlaces */
        color: #333; /* Color de los enlaces */
        font-weight: 600; /* Grosor de la fuente */
        font-size: 16px; /* Tamaño de la fuente */
      }
      svg{
        box-sizing: border-box;
      }
      .logo[data-v-608f1a0f] {
        position: relative
    }
    
    .logo+.text[data-v-608f1a0f] {
        padding-left: 8px
    }
    
    .text[data-v-608f1a0f] {
        font-size: 16px;
        padding-right: 50rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
      </style>
      