import Character from '../basicCharacter';

test('Check character with invalid name', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Invalid name');
  expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Invalid name');
});
