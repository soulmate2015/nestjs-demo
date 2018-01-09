import { readdirSync } from 'fs';
import { resolve } from 'path';
import { split } from 'lodash';

let models = {};
(() => {
  const seqModelPath = resolve(__dirname, 'libs');
  readdirSync(seqModelPath)
    .filter((file) => {
      // 过滤models
      return true;
    })
    .forEach((file) => {
      // models['文件名']
      models[split(file, '.js')[0]] = {
        name: split(file, '.js')[0],
        path: resolve(seqModelPath, file),
      };
    });
})();

export const modelProviders = [
  {
    provide: 'Models',
    useValue: models,
  }
];
