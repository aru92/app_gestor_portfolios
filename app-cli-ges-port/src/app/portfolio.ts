export class Portfolio {
  constructor(
    private nombre : string,
    private descripción : string,
    private fichero : string
  ){
  if (this.nombre ==""){
    console.error("Nombre no puede quedar vacío");
    throw new Error("Nombre no puede quedar vacío");
  }
}
}

