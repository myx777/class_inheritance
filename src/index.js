class Character {
    constructor(name, type, health, level) {
        this.name = this.characterName(name);
        this.type = this.typeName(type);
        this.health = 100;
        this.level = 1;
    }
    typeName(type){
        const legacyType = [
            'Bowman', 
            'Swordsman', 
            'Magician', 
            'Daemon', 
            'Undead', 
            'Zombie'
        ];
        if(!legacyType.includes(type)) {
            throw new Error('Invalid type');
        }
       return type;
    }
    characterName(name) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('Invalid name');
        }
        return name;
    }
    
}

class Bowerman extends Character {
    constructor(name, type, health, level, attack, defence){
        super(name, type, health, level, attack, defence);
        this.attack = 25;
        this.defence = 25;
    }
}

class Swordsman extends Character {
    constructor(name, type, health, level, attack, defence){
        super(name, type, health, level, attack, defence);
        this.attack = 40;
        this.defence = 10;
    }
}
class Magician extends Character {
    constructor(name, type, health, level, attack, defence){
        super(name, type, health, level, attack, defence);
        this.attack = 10;
        this.defence = 40;

    }
}
class Daemon extends Character {
    constructor(name, type, health, level, attack, defence){
        super(name, type, health, level, attack, defence);
        this.attack = 25;
        this.defence = 25;
    }
}
class Undead extends Character {
    constructor(name, type, health, level, attack, defence){
        super(name, type, health, level, attack, defence);
        this.attack = 40;
        this.defence = 10;
    }
}
class Zombie extends Character {
    constructor(name, type, health, level, attack, defence){
        super(name, type, health, level, attack, defence);
        this.attack = 10;
        this.defence = 40;
    }
}
