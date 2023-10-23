// Importamos el módulo Component desde Angular core
import { Component } from '@angular/core';

// Usamos el decorador Component para configurar este componente
@Component({
    // Selector del componente que se usará en la vista HTML
  selector: 'app-header',
  // Ruta del archivo HTML que representa la vista del componente
  templateUrl: './header.component.html',
  // Rutas a archivos CSS para estilizar el componente
  styleUrls: ['./header.component.css']
})
/* Definimos la clase del componente HeaderComponent que puede ser 
usado o mencionado en cualquier parte de nuestra aplicación*/
export class HeaderComponent {}
