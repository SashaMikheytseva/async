import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoaderAsync {
  static async load() {
    const data = await read();
    const saving = await json(data);
    const gameSaving = new GameSaving(JSON.parse(saving));
    return gameSaving;
  }
}
