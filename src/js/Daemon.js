import Character from './basicCharacter';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 25;
    this.defence = 25;
  }
}
