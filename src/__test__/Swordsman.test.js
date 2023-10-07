import Swordsman from '../Swordsman';

test('Check create character "Swordsman"', () => {
  const testSwordsman = new Swordsman('Fedia', 'Swordsman');
  expect(testSwordsman).toBe(testSwordsman);
});
