import { Module, Global } from '@nestjs/common';
import { configProviders } from './config.provider';

@Global()
@Module({
  modules: [],
  components: [...configProviders],
  exports: [...configProviders],
})
export class ConfigModule {}