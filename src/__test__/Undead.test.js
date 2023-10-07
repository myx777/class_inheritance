import Undead from '../js/Undead';

test('Check create character "Undead"', () => {
  const testUndead = new Undead('Fedia', 'Undead');
  expect(testUndead).toBe(testUndead);
});
