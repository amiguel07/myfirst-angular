import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes : string [] = ['Superman', 'Batman', 'Iroman', 'Spiderman'];
  heroeBorrado: string = ""; 

  borrar() : void {

   this.heroeBorrado =  this.heroes.shift() || '';
   //console.log(heroeBorrado);
  }

}
