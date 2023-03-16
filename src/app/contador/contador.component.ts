import {Component } from '@angular/core';

@Component({
    selector : 'app-contador',
    template : `
    <h1>{{titulo}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>
    <button (click) = "acumular(-1)">-1</button>
    <span>{{numero}}</span>
    <!-- <button (click) = "sumar()">+1</button> -->
    <button (click) = "acumular(1)">+1</button>
    `
})
export class ContadorComponent {
    titulo : string = 'appContador';
  numero : number = 10;
  base : number = 55;

  sumar () { 
    this.numero = this.numero + 1;
  }

  acumular ( valor:number ) {
      this.numero += valor; 
  }
}