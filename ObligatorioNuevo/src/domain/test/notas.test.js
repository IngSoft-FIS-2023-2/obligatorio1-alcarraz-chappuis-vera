import { Notas } from '../notas';

describe('Notas class tests', () => {
  test('Crear una nota', () => {
    const nota = new Notas('Este es mi titulo');
    const tituloNota = nota.getTitulo();
    const tituloEsperado = 'Este es mi titulo';
    expect(tituloNota).toBe(tituloEsperado);
  });

  test('Crear una nota', () => {
    const nota = new Notas('Este es mi titulo');
    nota.setTexto('Hola');
    const textoNota = nota.getTexto();
    const textoEsperado = 'Hola';
    expect(textoNota).toBe(textoEsperado);
  });

  test('Titulo null', () => {
    const nota = new Notas(null);
    const expectedErrorMessage = 'La nota debe tener un titulo no nulo';
    expect(() => nota.isValid()).toThrow(expectedErrorMessage);
  });

  test('Titulo undefined', () => {
    const nota = new Notas(undefined);
    const expectedErrorMessage = 'La nota debe tener un titulo no nulo';
    expect(() => nota.isValid()).toThrow(expectedErrorMessage);
  });

  test('Titulo vacio', () => {
    const nota = new Notas('');
    const expectedErrorMessage = 'La nota debe tener un titulo no nulo';
    expect(() => nota.isValid()).toThrow(expectedErrorMessage);
  });

  // Descripcion vacia
  test('Texto null', () => {
    const nota = new Notas('Este es mi titulo');
    nota.setTexto(null);
    const expectedErrorMessage = 'El texto de la nota no puede ser nulo';
    expect(() => nota.isValid()).toThrow(expectedErrorMessage);
  });

  test('Texto undefined', () => {
    const nota = new Notas('Este es mi titulo');
    nota.setTexto(undefined);
    const expectedErrorMessage = 'El texto de la nota no puede ser nulo';
    expect(() => nota.isValid()).toThrow(expectedErrorMessage);
  });

  test('Texto vacio', () => {
    const nota = new Notas('Este es mi titulo');
    nota.setTexto('');
    const expectedErrorMessage = 'El texto de la nota no puede ser nulo';
    expect(() => nota.isValid()).toThrow(expectedErrorMessage);
  });

  test('Color Equivocado', () => {
    const nota = new Notas('Este es mi titulo');
    nota.setTexto('Holaaa');
    nota.setColor('Blanco');
    const color = nota.getColor();
    expect(color).toBe('#FF0000');
  });

  test('Nota valida Roja', () => {
    const nota = new Notas('Este es mi titulo');
    nota.setTexto('Este es mi texto');
    nota.setColor('Rojo');
    expect(nota.getColor()).toBe('#FF0000');
    expect(nota.isValid()).toBe(true);
  });

  test('Nota valida Azul', () => {
    const nota = new Notas('Este es mi titulo');
    nota.setTexto('Este es mi texto');
    nota.setColor('Azul');
    expect(nota.getColor()).toBe('#0000FF');
    expect(nota.isValid()).toBe(true);
  });

  test('Nota valida Verde', () => {
    const nota = new Notas('Este es mi titulo');
    nota.setTexto('Este es mi texto');
    nota.setColor('Verde');
    expect(nota.getColor()).toBe('#008000');
    expect(nota.isValid()).toBe(true);
  });
  test('Nota valida Naranja', () => {
    const nota = new Notas('Este es mi titulo');
    nota.setTexto('Este es mi texto');
    nota.setColor('Naranja');
    expect(nota.getColor()).toBe('#FFA500');
    expect(nota.isValid()).toBe(true);
  });

  test('Color válido', () => {
    const nota = new Notas('Este es mi titulo');
    nota.setTexto('Holaaa');
    nota.setColor('Rojo');
    expect(nota.isValid()).toBe(true);
  });

  test('ToString nota', () => {
    const nota = new Notas('Este es mi titulo');
    nota.setTexto('Este es mi texto');
    nota.setColor('Rojo');
    const expectedString = 'Titulo: Este es mi titulo - texto: Este es mi texto - color: #FF0000';
    expect(nota.toString()).toBe(expectedString);
  });
  test('Color indefinido', () => {
    const nota = new Notas('Este es mi titulo');
    nota.setTexto('Holaaa');
    nota.setColor(undefined);
    const color = nota.getColor();
    expect(color).toBe('#FF0000');
  });
});
