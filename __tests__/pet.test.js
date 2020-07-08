const Pet = require('../src/pet');


const pet = new Pet('Fido');


describe ('constructor', () => {
    it ('returns an object', () => {
        expect(pet).toBeInstanceOf(Object);
    });
    it ('sets the name property', () => {
        expect(pet.name).toBe('Fido');
    });
    it ('has function growUp that adds 1 to the age', () => {
        expect(pet.age).toBe(0);
        pet.growUp();
        expect(pet.age).toBe(1);
    });
});