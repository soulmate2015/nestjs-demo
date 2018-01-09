import { operatorsAliases } from './libs/sequelize';

export const enumProviders = [
  {
    provide: 'EnumSequelize',
    useValue: operatorsAliases,
  }
];