import Bowerman from '../Bowerman';

test('Check create character "Bowerman"', () => {
  const testBowerman = new Bowerman('Fedia', 'Bowman');
  expect(testBowerman).toBe(testBowerman);
});
