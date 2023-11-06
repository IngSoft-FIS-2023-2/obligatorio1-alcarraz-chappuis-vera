class Nota{
    constructor(titulo, texto){
        this.titulo = titulo;
        this.texto = texto;
    }
    toString () {
        return this.titulo + " " + this.texto;
    }
    
}

//CHEQUEAR COMO PONERLE CIERTOS COLORES A CADA TITULO

class Sistema{
    constructor(){
        this.listaNotas = [];
    }

    agregarNota(unaNota){
        this.listaNotas.push(unaNota);
    }

    darTodasLasNotas(){
        return this.listaNotas;
    }
}