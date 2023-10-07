import Zombie from '../Zombie';

test('Check create character "Zombie"', () => {
  const testZombie = new Zombie('Fedia', 'Zombie');
  expect(testZombie).toBe(testZombie);
});
