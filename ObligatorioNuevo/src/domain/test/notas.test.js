import { Notas } from "../notas";

describe('Notas class tests', () => {

    test ("Crear una nota", () =>{
        let nota = new Notas("Este es mi titulo");
        let tituloNota = nota.getTitulo();
        let tituloEsperado = "Este es mi titulo";
        expect(tituloNota).toBe(tituloEsperado);
    });

    test ("Crear una nota", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Hola");
        let textoNota = nota.getTexto();
        let textoEsperado = "Hola";
        expect(textoNota).toBe(textoEsperado);
    });



    test ("Titulo null", () =>{
        let nota = new Notas(null);
        let expectedErrorMessage = 'La nota debe tener un titulo no nulo';
        expect(() => nota.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Titulo undefined", () =>{
        let nota = new Notas(undefined);
        let expectedErrorMessage = 'La nota debe tener un titulo no nulo';
        expect(() => nota.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Titulo vacio", () =>{
        let nota = new Notas("");
        let expectedErrorMessage = 'La nota debe tener un titulo no nulo';
        expect(() => nota.isValid()).toThrow(expectedErrorMessage);
    });


    //Descripcion vacia
    test ("Texto null", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto(null);
        let expectedErrorMessage = 'El texto de la nota no puede ser nulo';
        expect(() => nota.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Texto undefined", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto(undefined);
        let expectedErrorMessage = 'El texto de la nota no puede ser nulo';
        expect(() => nota.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Texto vacio", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("");
        let expectedErrorMessage = 'El texto de la nota no puede ser nulo';
        expect(() => nota.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Color Equivocado", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Holaaa");
        nota.setColor("Blanco");
        let expectedErrorMessage = 'El color no esta en el sistema';
        expect(() => nota.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Nota valida Roja", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Este es mi texto");
        nota.setColor("Rojo");
        expect(nota.getColor()).toBe('#FF0000'); 
        expect(nota.isValid()).toBe(true);
    });

    test ("Nota valida Azul", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Este es mi texto");
        nota.setColor("Azul");
        expect(nota.getColor()).toBe('#0000FF'); 
        expect(nota.isValid()).toBe(true);
    });

    test ("Nota valida Verde", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Este es mi texto");
        nota.setColor("Verde");
        expect(nota.getColor()).toBe('#008000'); 
        expect(nota.isValid()).toBe(true);
    });
    test ("Nota valida Naranja", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Este es mi texto");
        nota.setColor("Naranja");
        expect(nota.getColor()).toBe('#FFA500'); 
        expect(nota.isValid()).toBe(true);
    });

    test ("ToString nota", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Este es mi texto");
        nota.setColor("Rojo");
        let expectedString = 'Titulo: Este es mi titulo - texto: Este es mi texto - color: #FF0000';
        expect(nota.toString()).toBe(expectedString);
    });
});