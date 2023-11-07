export default class Notaslist {

    #notas;
  
    constructor() {
      this.#notas = [];
    }
  
    enListar(notas) {
      let notaenListada = this.#notas.some(m => m.getNombre() == nota.getNombre());
      if (!notaenListada && nota.isValid()) {
        this.#notas.push(nota);
      } else {
        throw new Error(`No se pudo agregar. ${nota.getNombre()} ya está en la lista.`);
      }
    }
  
    getCountries() {
      return this.#notas;
    }
  }