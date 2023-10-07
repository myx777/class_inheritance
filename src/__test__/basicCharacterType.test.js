import Character from '../basicCharacter';

test('Check character with invalid type', () => {
  expect(() => new Character('John', 'InvalidType')).toThrow('Invalid type');
});
