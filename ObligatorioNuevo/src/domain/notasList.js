/* eslint "require-jsdoc": ["error", {
    "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": true,
        "FunctionExpression": true
    }
}]*/

/**
 * Clase que representa una lista de notas.
 */
export class NotasList {
  #notas;

  /**
   * Constructor de la clase NotasList.
   * Inicializa la lista de notas como un array vacío.
   */
  constructor() {
    this.#notas = [];
  }

  /**
   * Agrega una nota a la lista, si no existe una nota
   * con el mismo título y descripción.
   * @param {Notas} aNota - La nota que se va a agregar.
   * @throws {Error} - Error si la nota ya está en la lista o no es válida.
   */
  add(aNota) {
    const notaEnLista = this.#notas.some(
        (m) => m.getTitulo() == aNota.getTitulo() &&
      m.getTexto() == aNota.getTexto());

    if (!notaEnLista && aNota.isValid()) {
      this.#notas.push(aNota);
    } else {
      throw new Error('No se pudo agregar, la nota está repetida.');
    }
  }

  /**
   * Elimina una nota de la lista según su título y descripción.
   * @param {string} titulo - El título de la nota a eliminar.
   * @param {string} descripcion - La descripción de la nota a eliminar.
   * @throws {Error} - Error si la nota no se encuentra en la lista.
   * @return {Array} - La lista actualizada después de eliminar la nota.
   */
  deleteNoteByTitleAndDescription(titulo, descripcion) {
    const notaIndex = this.#notas.findIndex(
        (nota) => nota.getTitulo() == titulo && nota.getTexto() == descripcion);
    if (notaIndex !== -1) {
      this.#notas.splice(notaIndex, 1);
      return this.#notas;
      // Retorna la lista actualizada después de eliminar la nota
    }
    // eslint-disable-next-line max-len
    throw new Error(`No se pudo encontrar la nota con título: ${titulo} y descripción: ${descripcion}`);
  }


  /**
   * Obtiene la lista actual de notas.
   * @return {Array} - La lista de notas.
   */
  getNotasList() {
    return this.#notas;
  }
}
