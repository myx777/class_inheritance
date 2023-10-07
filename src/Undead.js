import Character from './basicCharacter';

export default class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 40;
    this.defence = 10;
  }
}
