import { Country } from "../country";
import { Notas } from "../notas";

describe('Notas class tests', () => {

    test ("Crear una nota", () =>{
        let nota = new Notas("Este es mi titulo");
        let tituloNota = nota.getTitulo();
        let tituloEsperado = "Este es mi titulo";
        expect(tituloNota).toBe(tituloEsperado);
    });

    test ("Titulo null", () =>{
        let nota = new Notas(null);
        let expectedErrorMessage = "El nombre del país no puede ser vacío";
        expect(() => nota.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Titulo undefined", () =>{
        let nota = new Notas(undefined);
        let expectedErrorMessage = "El nombre del titulo no puede ser vacío";
        expect(() => nota.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Titulo vacio", () =>{
        let nota = new Notas("");
        let expectedErrorMessage = "El nombre del titulo no puede ser vacío";
        expect(() => nota.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Texto null", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto(null);
        let expectedErrorMessage = "El texto no puede ser vacio";
        expect(() => nota.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Texto undefined", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto(undefined);
        let expectedErrorMessage = "El texto no puede ser vacio";
        expect(() => nota.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Texto vacio", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("");
        let expectedErrorMessage = "El texto no puede ser vacio";
        expect(() => nota.isValid()).toThrow(expectedErrorMessage);
    });

    test ("Nota valida", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Este es mi texto");
        nota.setColor("Rojo"); //necesario?
        expect(nota.isValid()).toBe(true);
    });

    test ("ToString nota", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Este es mi texto");
        nota.setColor("Rojo");
        let expectedString = "Titulo: Este es mi titulo - texto: Este es mi texto - color: Rojo";
        expect(nota.toString()).toBe(expectedString);
    });
});