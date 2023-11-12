export class NotasList {

  #notas;

  constructor() {
    this.#notas = [];
  }

  add(aNota) {
    if (aNota.isValid()) {
      this.#notas.push(aNota);
    } else {
      throw new Error(`No se pudo agregar. ${aNota.getNombre()} ya está en la lista.`);
    }
  }

  deleteNoteByTitleAndDescription(titulo, descripcion) {
    const notaIndex = this.#notas.findIndex(nota => nota.getTitulo() === titulo && nota.getTexto() === descripcion);
  
    if (notaIndex !== -1) {
      this.#notas.splice(notaIndex, 1);
      return this.#notas; // Retorna la lista actualizada después de eliminar la nota
    } else {
      throw new Error(`No se pudo encontrar la nota con título: ${titulo} y descripción: ${descripcion}`);
    }
  }

  getNotasList() {
    return this.#notas;
  }
}
