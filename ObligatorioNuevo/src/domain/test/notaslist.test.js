import {Notas} from '../notas';
import {NotasList} from '../notasList';

describe('notasList class tests', () => {
  test('Crea una lista de notas vacia', () => {
    const listaDeNotas = new NotasList();
    const expectedLength = 0;
    expect(listaDeNotas.getNotasList().length).toBe(expectedLength);
  });

  test('Añadir una nota a la lista', () => {
    const listaDeNotas = new NotasList();
    const nota = new Notas('Este es mi titulo');
    nota.setTexto('Este es mi texto');
    nota.setColor('Verde');
    listaDeNotas.add(nota);
    const expectedLength = 1;
    expect(listaDeNotas.getNotasList().length).toBe(expectedLength);
  });
  test('Añadir múltiples notas', () => {
    const listaDeNotas = new NotasList();

    const nota1 = new Notas('Nota 1');
    nota1.setTexto('Texto de la nota 1');
    nota1.setColor('Rojo');
    listaDeNotas.add(nota1);

    const nota2 = new Notas('Nota 2');
    nota2.setTexto('Texto de la nota 2');
    nota2.setColor('Verde');
    listaDeNotas.add(nota2);

    const expectedLength = 2;
    expect(listaDeNotas.getNotasList().length).toBe(expectedLength);
  });

  test('Eliminar nota existente', () => {
    const listaDeNotas = new NotasList();
    const nota = new Notas('Título de prueba');
    nota.setTexto('Texto de prueba');
    nota.setColor('Azul');
    listaDeNotas.add(nota);

    listaDeNotas.deleteNoteByTitleAndDescription(
        'Título de prueba',
        'Texto de prueba');
    const expectedLength = 0;
    expect(listaDeNotas.getNotasList().length).toBe(expectedLength);
  });

  test('Borrar nota que no existe', () => {
    const listaDeNotas = new NotasList();
    const nota = new Notas('Este es mi titulo');
    nota.setTexto('Este es mi texto');
    nota.setColor('Verde');
    listaDeNotas.add(nota);
    const expectedErrorMessage =
  'No se pudo encontrar la nota con título: Almorzar y descripción: Milanesas';
    expect(() =>
      // eslint-disable-next-line comma-dangle
      listaDeNotas.deleteNoteByTitleAndDescription('Almorzar', 'Milanesas')
    ).toThrow(expectedErrorMessage);
  });
  test('Eliminar nota de una lista vacía', () => {
    const listaDeNotas = new NotasList();
    const expectedErrorMessage =
  'No se pudo encontrar la nota con título: Título y descripción: Descripción';
    expect(() =>
      // eslint-disable-next-line comma-dangle
      listaDeNotas.deleteNoteByTitleAndDescription('Título', 'Descripción')
    ).toThrow(expectedErrorMessage);
  });

  test('Agregar una nota Repetida al sistema', () => {
    const notasList = new NotasList();
    const notas = new Notas('Comida');
    notas.setTexto('Como Bananas');
    notas.setColor('Rojo');
    notasList.add(notas);
    const expectedErrorMessage = 'No se pudo agregar, la nota está repetida.';
    expect(() => notasList.add(notas)).toThrow(expectedErrorMessage);
  });

  test('Añadir nota invalida a la lista', () => {
    const listaDeNotas = new NotasList();
    const nota = new Notas(null);
    const expectedErrorMessage = 'La nota debe tener un titulo no nulo';
    expect(() => listaDeNotas.add(nota)).toThrow(expectedErrorMessage);
  });
  test('Añadir nota invalida a la lista', () => {
    const notaList = new NotasList();
    const nota = new Notas('');
    const expectedErrorMessage = 'La nota debe tener un titulo no nulo';
    expect(() => notaList.add(nota)).toThrow(expectedErrorMessage);
  });
  /* test ("Añadir nota invalida a la lista", () =>{
      let notaList = new NotasList();
      let nota = new Notas("Hola");
      nota.setTexto("como");
      nota.setColor("blanco");
      let expectedErrorMessage = 'El color no esta en el sistema';
      expect(() => notaList.add(nota)).toThrow(expectedErrorMessage);
  }); */

  test('Añadir nota invalida a la lista', () => {
    const notaList = new NotasList();
    const nota = new Notas('');
    const expectedErrorMessage = 'La nota debe tener un titulo no nulo';
    expect(() => notaList.add(nota)).toThrow(expectedErrorMessage);
  });

  test('Obtener la lista de notas después de añadir', () => {
    const listaDeNotas = new NotasList();

    const nota1 = new Notas('Nota 1');
    nota1.setTexto('Texto de la nota 1');
    nota1.setColor('Rojo');
    listaDeNotas.add(nota1);

    const nota2 = new Notas('Nota 2');
    nota2.setTexto('Texto de la nota 2');
    nota2.setColor('Verde');
    listaDeNotas.add(nota2);

    const expectedList = [nota1, nota2];
    expect(listaDeNotas.getNotasList()).toEqual(expectedList);
  });
});
