/* eslint-disable  no-unused-vars */
import GameSaving from '../js/GameSaving';
import GameSavingLoader from '../js/GameSavingLoader';

test('checking load func', async () => {
  const game = await GameSavingLoader.load();
  const info = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  expect(game).toEqual(info);
});
