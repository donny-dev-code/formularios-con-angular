import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '062 formValores';
  codigo:string="";
  nombre:string="";
  edad:number=20;
  opcion:string ="2";
  comentarios:string="";
  sexo:string="hombre";
  activar:boolean=false;
  para:string="commit"

  cambio(){
    this.activar= !this.activar
    console.log(this.activar)
  }

  mostrarVar(){
   
    console.log("Codigo (" + this.codigo +")"+ "Nombre ("+ this.nombre +")"+
    "Edad ("+this.edad+")"+"Opción ("+ this.opcion +")"+
    "Comentarios ("+this.comentarios +")"+ "Sexo ("+this.sexo+")");
  }
 
  onSubmit(){
    console.log("Submit");
  }
}
