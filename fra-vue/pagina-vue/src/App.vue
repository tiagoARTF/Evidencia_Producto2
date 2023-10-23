<template>
  <div>
    <Header /> <!-- Usar el componente de encabezado -->
    <Body /> <!-- Usar el componente de cuerpo -->
    <Footer /> <!-- Usar el componente de pie de página -->
  </div>
</template>

<script>
import Header from './components/Header.vue'; // Importa el componente de encabezado
import Body from './components/Body.vue'; // Importa el componente de cuerpo
import Footer from './components/Footer.vue'; // Importa el componente de pie de página

/*Aquí se exporta la configuración del componente. Los componentes de Vue 
están configurados como objetos, y este objeto es la configuración del componente actual.*/
export default {
  /*Aquí se define la propiedad components que se utiliza para mostrar o registrar los componentes */
  components: {
    Header, Body, Footer, // Registra los componentes para usarlos en el template
  },
}
</script>
