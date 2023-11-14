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
 * Clase que representa una Nota.
 * @class
 */
export class Notas {
  #titulo;

  #texto;

  #color;

  /**
   * Crea una instancia de Notas.
   * @constructor
   * @param {string} atitulo - El título de la nota.
   */
  constructor(atitulo) {
    this.#titulo = atitulo;
  }

  /**
   * Obtiene el título de la nota.
   * @return {string} - El título de la nota.
   */
  getTitulo() {
    return this.#titulo;
  }

  /**
   * Obtiene el texto de la nota.
   * @return {string} - El texto de la nota.
   */
  getTexto() {
    return this.#texto;
  }

  /**
   * Obtiene el color de la nota.
   * @return {string} - El color de la nota.
   */
  getColor() {
    return this.#color;
  }

  /**
   * Establece el texto de la nota.
   * @param {string} aTexto - El texto de la nota.
   */
  setTexto(aTexto) {
    this.#texto = aTexto;
  }

  /**
   * Establece el color de la nota.
   * @param {string} aColor - El color de la nota.
   * @throws {Error} - Se lanza un error si el color no está en el sistema.
   */
  setColor(aColor) {
    switch (aColor) {
      case 'Rojo':
        this.#color = '#FF0000';
        break;
      case 'Azul':
        this.#color = '#0000FF';
        break;
      case 'Verde':
        this.#color = '#008000';
        break;
      case 'Naranja':
        this.#color = '#FFA500';
        break;
      default:
        this.#color = '#FF0000';
        break;
    }
  }

  /**
   * Devuelve una representación de cadena de la nota.
   * @return {string} - Una cadena que representa la nota.
   */
  toString() {
    return (
      'Titulo: ' + this.#titulo +
      ' - texto: ' + this.#texto +
      ' - color: ' + this.#color
    );
  }
  /**
   * Verifica si la nota es válida.
   * @throws {Error}
   * - Se lanza un error si el título o el texto de la nota son nulos o vacíos.
   * @return {boolean} - Retorna verdadero si la nota es válida.
   */
  isValid() {
    if (this.#titulo === undefined ||
       this.#titulo === null || this.#titulo === '') {
      throw new Error('La nota debe tener un titulo no nulo');
    }
    if (this.#texto === undefined ||
      this.#texto === null || this.#texto === '') {
      throw new Error('El texto de la nota no puede ser nulo');
    }
    return true;
  }
}

