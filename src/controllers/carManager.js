import * as fs from 'fs';

class CarManager {
    idProduct = 1;

  constructor() {
    this.newCar = [];
    this.path = "./dataBaseCar.json";
  }

  async getCar() {
    try {
      const contenido = await fs.promises.readFile(this.path, {encoding: "utf-8",});
      return JSON.parse(contenido);
    } catch (error) {
      console.log(`El archivo ${this.path} no existe, creando...`);
      await fs.promises.writeFile(this.path, "[]");
      return [];
    }
  }

  async addCar(newCar) {
    const arrayCar = await this.getCar();
    if (arrayCar.find((p) => p.idProduct === newCar.idProduct)){
        throw new Error("No se puede crear un carrito con id repetido");
    }
    
    //Retorna el carrito y le asigna una autoID.
    arrayCar.push({id: this.idProduct++, ...newCar});

    await fs.promises.writeFile(this.path, JSON.stringify(arrayCar));
    
  }






}

export default CarManager;