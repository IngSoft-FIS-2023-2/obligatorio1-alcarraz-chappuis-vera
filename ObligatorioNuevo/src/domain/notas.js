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
 
      switch (aColor) {
        case "Rojo":
          this.#color='#FF0000';
          break;
        case "Azul":
          this.#color='#0000FF';
          break;
        case "Verde":
          this.#color='#008000';
          break;
        case "Naranja":
          this.#color='#FFA500';
          break;
        default:
          this.#color='#FF0000';
          break;
      }
         
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