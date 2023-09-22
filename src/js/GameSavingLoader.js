import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((responce) => json(responce))
      .then((saving) => {
        const save = new GameSaving(JSON.parse(saving));
        return save;
      });
  }
}
