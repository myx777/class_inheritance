import Daemon from '../js/Daemon';

test('Check create character "Daemon"', () => {
  const testDaemon = new Daemon('Fedia', 'Daemon');
  expect(testDaemon).toBe(testDaemon);
});
