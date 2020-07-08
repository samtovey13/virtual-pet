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

describe('walk', () => {
    it('increases fitness level by 4', () => {
        pet.growUp();
        pet.growUp();
        expect(pet.fitness).toBe(4);
        pet.walk();
        expect(pet.fitness).toBe(8);
    });
    it('fitness level is capped at 10', () => {
        pet.growUp();
        expect(pet.fitness).toBe(7)
        pet.walk();
        expect(pet.fitness).toBe(10);
    });
});

describe('feed', () => {
    it('reduces hunger by 3', () => {
        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toBe(2);
    })
    it('hunger level never falls below 0', () => {
        pet.hunger = 1;
        pet.feed();
        expect(pet.hunger).toBe(0);
    });
})