// Importamos el módulo Component desde Angular core
import { Component } from '@angular/core';

// Usamos el decorador Component para configurar este componente
@Component({
  // Selector del componente que se usará en la vista HTML
  selector: 'app-body',
  // Ruta del archivo HTML que representa la vista del componente
  templateUrl: './body.component.html',
  // Rutas a archivos CSS para estilizar el componente
  styleUrls: ['./body.component.css']
})
/* Definimos la clase del componente BodyComponent que puede ser 
usado o mencionado en cualquier parte de nuestra aplicación*/
export class BodyComponent {

}
