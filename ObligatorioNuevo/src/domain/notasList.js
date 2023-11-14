export class NotasList {
  #notas;

  constructor() {
    this.#notas = [];
  }

  add(aNota) {
    const notaEnLista = this.#notas.some((m) => m.getTitulo() === aNota.getTitulo() 
    && m.getTexto() === aNota.getTexto());
    if (!notaEnLista && aNota.isValid()) {
      this.#notas.push(aNota);
    } else {
      throw new Error('"No se pudo agregar, la nota esta repetida.');
    }
  }

  deleteNoteByTitleAndDescription(titulo, descripcion) {
    const notaIndex = this.#notas.findIndex((nota) => nota.getTitulo() === titulo 
    && nota.getTexto() === descripcion);

    if (notaIndex !== -1) {
      this.#notas.splice(notaIndex, 1);
      return this.#notas; // Retorna la lista actualizada después de eliminar la nota
    }
    throw new Error(`No se pudo encontrar la nota con título: ${titulo} y descripción: ${descripcion}`);
  }

  getNotasList() {
    return this.#notas;
  }
}
