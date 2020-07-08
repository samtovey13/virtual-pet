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
        pet.fitness = 1;
        pet.walk();
        expect(pet.fitness).toBe(5);
    });
    it('fitness level is capped at 10', () => {
        pet.fitness = 9;
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
});

describe('checkUp', () => {
    it('tells you it needs a walk when fitness is 3 or less', () => {
        pet.fitness = 2;
        pet.hunger = 2;
        expect(pet.checkUp()).toBe('I need a walk');
    });
    it ('tells you it is hungry if hunger is 5 or more', () => {
        pet.fitness = 10;
        pet.hunger = 8;
        expect(pet.checkUp()).toBe('I am hungry');
    });
    it ('returns a combined message if it is both hungry and needs a walk', () => {
        pet.fitness = 3;
        pet.hunger = 5;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });
    it('tells you it feels great otherwise', () => {
        pet.fitness = 10;
        pet.hunger = 0;
        expect(pet.checkUp()).toBe('I feel great!');
    });
});

describe('get isAlive', () => {
    it ('checks if pet is alive before walking', () => {
        pet.fitness = 0;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
    it('checks if pet is alive before feeding', () => {
        pet.hunger = 10;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
    it('checks if pet is alive before growing up', () => {
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
    it('checks if pet is alive before checkUp', () => {
        pet.hunger = 10;
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });
});