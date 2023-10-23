import React from 'react';// Importamos la biblioteca React, necesaria para trabajar con React.
import './App.css'; // Importamos un archivo CSS llamado 'App.css' para aplicar estilos a nuestra aplicación.
import Header from './components/Header'; // Importamos el componente 'Header' desde el archivo header.js
import Body from './components/Body';// Importamos el componente 'Body' desde el archivo 'Body.js'
import Footer from './components/Footer'; // Importamos el componente 'Footer' desde el archivo 'Footer.js'.
import './App.css';

function App() { /* Definimos una función llamada 'App' que representa el componente
 principal de nuestra aplicación.*/
  return ( /* Iniciamos el cuerpo de nuestra función, que contendrá el código
   que describe la estructura de la interfaz de usuario.*/
  /*Creamos un contenedor `div` con una clase llamada "App". Esta clase se usa 
  para aplicar estilos CSS desde el archivo 'App.css'.*/
  
  //"Header"  Insertamos el componente 'Header' en nuestra aplicación.
  //"Body"  Insertamos el componente 'Body'.
  //"Footer"  Insertamos el componente 'Footer'.
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
//Exportamos el componente app pero que puede ser utilizado en otros archivos de la app.
export default App; 



