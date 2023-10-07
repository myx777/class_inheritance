import Character from '../basicCharacter';

test('Check character at mistakes in name and type', () => {
  const characterTest = new Character('Vasia', 'Bowman');
  expect(characterTest).toBe(characterTest);
});
