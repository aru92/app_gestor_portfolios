import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../portfolios.service';
import { Portfolio } from 'app/portfolio';

@Component({
  selector: 'app-form-baja',
  templateUrl: './form-baja.component.html',
  styleUrls: ['./form-baja.component.css']
  //providers: [PortfoliosService]
})
export class FormBajaComponent implements OnInit {
  nombreIntroducido: string;
  servPort: PortfoliosService;
  private arrayPortfolios : Array<Portfolio>;

  constructor(sp : PortfoliosService) {
      this.servPort = sp;
      
   }

  ngOnInit() {
    this.arrayPortfolios = this.servPort.listar();
    
  
  }
  darDeBaja() : void {
    this.servPort.baja(this.nombreIntroducido);
    console.log("<<< Debería darse de baja >>>");
  }
}
