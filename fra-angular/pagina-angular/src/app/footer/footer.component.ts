// Importamos el módulo Component desde Angular core
import { Component } from '@angular/core';

// Usamos el decorador Component para configurar este componente
@Component({
  // Selector del componente que se usará en la vista HTML
  selector: 'app-footer',
  // Ruta del archivo HTML que representa la vista del componente
  templateUrl: './footer.component.html',
  // Rutas a archivos CSS para estilizar el componente
  styleUrls: ['./footer.component.css']
})
/* Definimos la clase del componente FooterComponent que puede ser 
usado o mencionado en cualquier parte de nuestra aplicación*/
export class FooterComponent {

}
