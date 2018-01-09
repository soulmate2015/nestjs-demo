import { Module, Global } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { EnumModule } from '../@enum/enum.module';
import { ModelModule } from '../@model/model.module';

@Global()
@Module({
  modules: [EnumModule, ModelModule],
  components: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}