export class Notas {

  #titulo;
  #texto;
  #color;

  constructor(atitulo) {
    this.#titulo = atitulo;
  }

  getTitulo() {
    return this.#titulo;
  }
  getTexto(){
    return this.#texto
  }
  getColor(){
    return this.#color
  }

  setTexto(aTexto) {
    this.#texto = aTexto;
  }
  setColor(aColor){
    this.#color=aColor;
  }

  toString() {
    return `Titulo: ${this.#titulo} - texto: ${this.#texto} - color: ${this.#color}` ;
  }

  isValid() {
    if (this.#titulo === undefined || this.#titulo === null || this.#titulo === '') {
      throw new Error('La nota debe tener un titulo no nulo');
    }
    if (this.#texto === undefined || this.#texto === null || this.#texto === '') {
      throw new Error('El texto de la nota no puede ser nulo');
    }
    return true;
  }
}