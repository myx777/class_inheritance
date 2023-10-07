export default class Character {
  constructor(name, type) {
    this.name = this.characterName(name);
    this.type = this.typeName(type);
    this.health = 100;
    this.level = 1;
  }

  static typeName(type) {
    const legacyType = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (!legacyType.includes(type)) {
      throw new Error('Invalid type');
    }
    return type;
  }

  static characterName(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Invalid name');
    }
    return name;
  }
}
