function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

const minFitness = 0;
const maxFitness = 10;
const minHunger = 0;
const maxHunger = 10;
const maxAge = 30;
const hungryAlert = 'I am hungry';
const fitnessAlert = 'I need a walk';
const feelGreatAlert = 'I feel great!';
const deathMessage = 'Your pet is no longer alive :('

Pet.prototype = {
    get isAlive() {
        return this.fitness > 0 && this.hunger < 10 && this.age < 30;
    }
};

Pet.prototype.growUp = function() {
    if(!this.isAlive) {
        throw new Error(deathMessage);
    };
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if(!this.isAlive) {
        throw new Error(deathMessage);
    };
    this.fitness += 4;
    if (this.fitness > maxFitness) {
        this.fitness = maxFitness;
    }
};

Pet.prototype.feed = function() {
    if(!this.isAlive) {
        throw new Error(deathMessage);
    }
    this.hunger -= 3;
    if (this.hunger < minHunger) {
        this.hunger = minHunger;
    }
};

Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        throw new Error(deathMessage);
    }
    if (this.hunger >= 5 && this.fitness <= 3) {
        return hungryAlert + ' AND ' + fitnessAlert;
    }
    if (this.hunger >= 5) {
        return hungryAlert;
    }
    if (this.fitness <= 3) {
        return fitnessAlert;
    }
    return feelGreatAlert;
};

module.exports = Pet;