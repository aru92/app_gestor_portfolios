import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../portfolios.service';

@Component({
  selector: 'app-form-alta', // <app-form-alta> Etiqueta </app-form-alta>
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css']
  //providers: [PortfoliosService]
})
export class FormAltaComponent implements OnInit {
  titulo: string;
  etiqueta_nombre: string;
  placeholder_nombre: string;
  nombreIntroducido: string;
  placeholder_desc: string;
  desc_introducido: string;
  placeholder_fich: string;
  fich_introducido: string;
  servPort : PortfoliosService;

  constructor(sp : PortfoliosService) { 
    this.servPort = sp; 
  }

  ngOnInit() { // Método, correspondiente al evento "Al inicializar este Componente", es decir, recibe una llamada automática por parte del motor de Angular
    this.titulo = "Alta de portfolios";
    this.etiqueta_nombre = "Nombre: ";
    this.placeholder_nombre = "Introduzca Nombre y apellidos";
    this.nombreIntroducido = "El Innombrable";
    this.placeholder_desc = "Descripcion";
    this.desc_introducido = "Describir";
    this.placeholder_fich = "Fichero";
    this.fich_introducido = "Introducir fichero";
  }
  limpiar (){
    this.nombreIntroducido = "";
    this.desc_introducido ="";
    this.fich_introducido ="";
    console.log("<<< Debería limpiarse >>>");
  }
  darDeAlta (){
    this.servPort.alta(this.nombreIntroducido, this.desc_introducido, this.fich_introducido);
    console.log("<<< Debería darse de alta >>>");
  }
}
