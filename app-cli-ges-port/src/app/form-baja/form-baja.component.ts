import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../portfolios.service';

@Component({
  selector: 'app-form-baja',
  templateUrl: './form-baja.component.html',
  styleUrls: ['./form-baja.component.css']
  //providers: [PortfoliosService]
})
export class FormBajaComponent implements OnInit {
  titulo: string;
  etiqueta_nombre: string;
  placeholder_nombre: string;
  nombreIntroducido: string;
  servPort: PortfoliosService;

  constructor(sp : PortfoliosService) {
      this.servPort = sp;
   }

  ngOnInit() {
    this.titulo = "Baja de portfolios";
    this.etiqueta_nombre = "Nombre: ";
    this.placeholder_nombre = "Introduzca Nombre y apellidos";
    this.nombreIntroducido = "El Innombrable";
    
  
  }
  darDeBaja() : void {
    this.servPort.baja(this.nombreIntroducido);
    console.log("<<< Debería darse de baja >>>");
  }
}
