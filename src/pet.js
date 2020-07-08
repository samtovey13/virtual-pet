function Pet(name) {
    this.name = name;
    this.age = minAge;
    this.hunger = minHunger;
    this.fitness = maxFitness;
    this.children = [];
};

const minFitness = 0;
const maxFitness = 10;
const minHunger = 0;
const maxHunger = 10;
const minAge = 0;
const maxAge = 30;
const hungryAlert = 'I am hungry';
const fitnessAlert = 'I need a walk';
const feelGreatAlert = 'I feel great!';
const deathMessage = 'Your pet is no longer alive :('

Pet.prototype = {
    get isAlive() {
        return this.fitness > minFitness && this.hunger < maxHunger && this.age < maxAge;
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

Pet.prototype.haveBaby = function (babyName) {
    this.children.push(new Pet(babyName));
};

module.exports = Pet;