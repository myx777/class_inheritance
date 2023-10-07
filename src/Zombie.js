import Character from './basicCharacter';

export default class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 10;
    this.defence = 40;
  }
}
