// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength;
    }

    recieveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name
    }

    recieveDamage(damage) 
    {
        this.health -= damage;
        if (this.health > 0)
        {
            return `${this.name} has recieved ${damage} points`
        }
        else {
            return `${this.name} has died in act of combat`;
             }
    }

    battlteCry() {
        return "Odin Owns You All!";
    }
}


// Saxon
class Saxon extends Soldier {
    recieveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has recieved ${damage} points of damage`
        }
        else {
            return "A Saxon has died in combat"
        }
    }
}

console.log()

// War
class War {}
