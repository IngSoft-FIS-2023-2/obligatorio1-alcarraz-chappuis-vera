import { Notas } from "../notas";
import { NotasList } from "../notasList";

describe("notasList class tests", () => {

    test ("Crea una lista de notas vacia", () =>{
        let listaDeNotas = new NotasList();
        let expectedLength = 0;
        expect(listaDeNotas.getNotasList().length).toBe(expectedLength);
    });

    test ("Añadir una nota a la lista", () =>{
        let listaDeNotas = new NotasList();
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Este es mi texto");
        nota.setColor("Verde"); //la option value se escribe asi?
        listaDeNotas.add(nota);
        let expectedLength = 1;
        expect(listaDeNotas.getNotasList().length).toBe(expectedLength);
    });

    test ("Añadir una nota repetida", () =>{
        let listaDeNotas = new NotasList();
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Este es mi texto");
        nota.setColor("Verde"); //la option value se escribe asi?
        listaDeNotas.add(nota);
        let expectedErrorMessage = "No se pudo agregar. Esta nota ya está en la lista.";
        expect(() => listaDeNotas.add(nota)),toThrow(expectedErrorMessage);
    });

    test ("Añadir nota invalida a la lista", () =>{
        let listaDeNotas = new NotasList();
        let nota = new Notas("");
        let expectedErrorMessage = "El titulo no puede ser vacío";
        expect(() => listaDeNotas.add(nota)),toThrow(expectedErrorMessage);
    });
     
});