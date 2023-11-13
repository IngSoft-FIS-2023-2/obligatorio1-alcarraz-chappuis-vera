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
        nota.setColor("Verde"); 
        listaDeNotas.add(nota);
        let expectedLength = 1;
        expect(listaDeNotas.getNotasList().length).toBe(expectedLength);
    });
    test("Añadir múltiples notas", () => {
        let listaDeNotas = new NotasList();
      
        let nota1 = new Notas("Nota 1");
        nota1.setTexto("Texto de la nota 1");
        nota1.setColor("Rojo");
        listaDeNotas.add(nota1);
      
        let nota2 = new Notas("Nota 2");
        nota2.setTexto("Texto de la nota 2");
        nota2.setColor("Verde");
        listaDeNotas.add(nota2);
      
        let expectedLength = 2;
        expect(listaDeNotas.getNotasList().length).toBe(expectedLength);
      });

    test("Eliminar nota existente", () => {
        let listaDeNotas = new NotasList();
        let nota = new Notas("Título de prueba");
        nota.setTexto("Texto de prueba");
        nota.setColor("Azul");
        listaDeNotas.add(nota);
      
        listaDeNotas.deleteNoteByTitleAndDescription("Título de prueba", "Texto de prueba");
        let expectedLength = 0;
        expect(listaDeNotas.getNotasList().length).toBe(expectedLength);
      });

    test ("Borrar nota que no existe", () =>{
        let listaDeNotas = new NotasList();
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Este es mi texto");
        nota.setColor("Verde"); 
        listaDeNotas.add(nota);
        let expectedErrorMessage = `No se pudo encontrar la nota con título: ${titulo} y descripción: ${descripcion}`;
        expect(() => listaDeNotas.deleteNoteByTitleAndDescription("Almorzar","Milanesas")),toThrow(expectedErrorMessage);
    });
    test("Eliminar nota de una lista vacía", () => {
        let listaDeNotas = new NotasList();
        let expectedErrorMessage = "No se pudo encontrar la nota con título: Título y descripción: Descripción";
        expect(() => listaDeNotas.deleteNoteByTitleAndDescription("Título", "Descripción")).toThrow(expectedErrorMessage);
      });
      

    test ("Añadir nota invalida a la lista", () =>{
        let listaDeNotas = new NotasList();
        let nota = new Notas(null);
        let expectedErrorMessage = `No se pudo agregar. ${aNota.getTitulo()}`;
        expect(() => listaDeNotas.add(nota)),toThrow(expectedErrorMessage);
  
      });
      test ("Añadir nota invalida a la lista", () =>{
        let listaDeNotas = new NotasList();
        let nota = new Notas("hola");
        nota.setTexto(null);
        let expectedErrorMessage = `No se pudo agregar. ${aNota.getTitulo()}`;
        expect(() => listaDeNotas.add(nota)),toThrow(expectedErrorMessage);
      });  

    test("Obtener la lista de notas después de añadir", () => {
        let listaDeNotas = new NotasList();
      
        let nota1 = new Notas("Nota 1");
        nota1.setTexto("Texto de la nota 1");
        nota1.setColor("Rojo");
        listaDeNotas.add(nota1);
      
        let nota2 = new Notas("Nota 2");
        nota2.setTexto("Texto de la nota 2");
        nota2.setColor("Verde");
        listaDeNotas.add(nota2);
      
        let expectedList = [nota1, nota2];
        expect(listaDeNotas.getNotasList()).toEqual(expectedList);
      });
      
     
});