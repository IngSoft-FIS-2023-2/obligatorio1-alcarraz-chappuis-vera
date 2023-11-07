export class NuevaNota {

    #titulo;
    #texto;
  
    constructor(aTitulo) {
      this.#titulo = aTitulo;
      this.#texto=aTexto
    }
  
    getTitulo() {
      return this.#titulo;
    }
  
    setTexto(aTexto) {
      this.#texto = aTexto;
    }
  
    toString() {
      return `Titulo: ${this.#titulo} - texto: ${this.#texto}`;
    }
  
    isValid() {
      if (this.#titulo === undefined || this.#titulo === null || this.#titulo === '') {
        throw new Error('La nota debe tener unn titulo no nulo');
      }
      if (this.#texto === undefined || this.#texto === null || this.#texto === '') {
        throw new Error('El texto de la nota no puede ser nulo');
      }
      return true;
    }
  }

