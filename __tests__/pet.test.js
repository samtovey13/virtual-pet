const Pet = require('../src/pet');

let pet;

beforeEach(() => {
    pet = new Pet('Fido');
});

describe ('constructor', () => {
    it ('returns an object', () => {
        expect(pet).toBeInstanceOf(Object);
    });
    it ('sets the name property', () => {
        expect(pet.name).toBe('Fido');
    });
});

describe ('growUp', () => {
    it ('adds 1 to the age', () => {
        expect(pet.age).toBe(0);
        pet.growUp();
        expect(pet.age).toBe(1);
    });
    it ('increases hunger by 5', () => {
        expect(pet.hunger).toBe(0);
        pet.growUp();
        expect(pet.hunger).toBe(5);
    });
    it('decreases fitness by 3', () => {
        expect(pet.fitness).toBe(10);
        pet.growUp();
        expect(pet.fitness).toBe(7);
    });
});