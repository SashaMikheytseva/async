/* eslint-disable  no-unused-vars */
import read from '../js/reader';
import json from '../js/parser';
import GameSavingLoaderAsync from '../js/async';
import GameSaving from '../js/GameSaving';

test('checking load func', async () => {
  const game = await GameSavingLoaderAsync.load();
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
