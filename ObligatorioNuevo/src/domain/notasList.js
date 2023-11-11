export class NotasList {

  #notas;

  constructor() {
    this.#notas = [];
  }

  add(aNota) {
    if (aNota.isValid()) {
      this.#notas.push(aNota);
    } else {
      throw new Error(`No se pudo agregar. ${country.getNombre()} ya está en la lista.`);
    }
  }

  getNotasList() {
    return this.#notas;
  }
}