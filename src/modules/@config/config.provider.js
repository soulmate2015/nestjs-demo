import * as config from 'config';

export const configProviders = [
  {
    provide: 'Config',
    useValue: config,
  }
];