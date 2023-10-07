import Character from '../js/basicCharacter';

test('Check character with invalid type', () => {
  expect(() => new Character('John', 'InvalidType')).toThrow('Invalid type');
});
