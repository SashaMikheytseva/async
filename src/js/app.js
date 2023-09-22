/* eslint-disable  no-unused-vars */
import GameSaving from './GameSaving';
import GameSavingLoader from './GameSavingLoader';
import read from './reader';
import json from './parser';
import GameSavingLoaderAsync from './async';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.log(error);
});

// async-await

(async () => {
  try {
    console.log(await GameSavingLoaderAsync.load());
  } catch (error) {
    console.log(error);
  }
})();
/* eslint-enable no-unused-vars */
