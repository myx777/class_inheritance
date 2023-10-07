import Bowerman from '../js/Bowerman';

test('Check create character "Bowerman"', () => {
  const testBowerman = new Bowerman('Fedia', 'Bowman');
  expect(testBowerman).toBe(testBowerman);
});
