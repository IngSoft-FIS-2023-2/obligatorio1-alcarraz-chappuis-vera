const unanota = require('../clases.js');

describe('unanota', () => {

    let nota;
    beforeEach(() => {
      nota = new unanota();
    });
  
    test('Tira un error cuando intentamos guardar una nota sin titulo', () => {
        expect(() => nota.saveNote()).toThrowError(
          'both arguments must be numbers'
        );
      });
  
  });