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
    console.log("<<< Alta portfolio " + nombre + " >>>");
  }
public baja(nombre : string) : void {
    for(var i=0; i<=this.lista.length;i++){
       if(this.lista[i].getNombre().toLowerCase() == nombre.toLowerCase()){
         this.lista.splice(i,1);
         console.log("<<< Baja portfolio " + nombre + " >>>");
         break;
        }
      }
      console.log("<<< No ha encontrado "+ nombre +" >>>");
    }
  
public listar(): Array<Portfolio>{
    console.log("<<< Lista portfolio: " + this.lista.toString() + " >>>");
  return this.lista;
}

}
