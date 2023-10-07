import Magician from '../Magician';

test('Check create character "Magician"', () => {
  const testMagician = new Magician('Fedia', 'Magician');
  expect(testMagician).toBe(testMagician);
});
