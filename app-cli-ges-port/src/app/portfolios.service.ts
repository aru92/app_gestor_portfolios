import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';

@Injectable()
export class PortfoliosService {
  lista : Array<Portfolio>

  constructor() { 
    console.log("<<< Creando servicio >>>");
    this.lista = new Array<Portfolio>();

  }
public alta(nombre : string, desc : string, fich : string) : void{
    let nuevoPortfolio : Portfolio;
    nuevoPortfolio = new Portfolio(nombre, desc, fich);
    this.lista.push(nuevoPortfolio);
    console.log("<<< Alta portfolio " + nombre + " >>>")
  }
public baja(nombre : string) : void {
    console.log("<<< Baja portfolio " + nombre + " >>>")
  }
public listar(): Array<Portfolio>{
  return this.lista;
}
}
