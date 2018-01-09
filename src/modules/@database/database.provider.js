import { Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async (config, aliases, models) => {
      const logger = new Logger('SequelizeToken');
      const sequelize = await new Sequelize(config.sqlName, config.sqlUser, config.sqlPwd, {
        host: config.sqlAddr,
        dialect: 'mysql',
        // 操作别名
        operatorsAliases: aliases,
        logging: process.env.NODE_ENV === 'prod' ?
          (sql) => {
            // ...
            logger.warn(sql);
          }
          // : console.log,
          : false,
        pool: {
          max: 5,
          min: 0,
          idle: 30000
        },
      });

      for (let eachModel in models) {
        models[eachModel] = sequelize.import(models[eachModel].path);
      }

      try {
        /**
         * 将模型同步到数据库
         * @param {boolean} force true:强制同步（同步全部），false: 非强制同步（同步所有尚未在数据库中的模型）
         */
        sequelize.sync({ force: false });
      } catch (err) {
        console.log('初始化mysql数据库ERROR');
        console.log(err);
      }

      return models;
    },
    inject: ['Config', 'EnumSequelize', 'Models'],
  }
];
