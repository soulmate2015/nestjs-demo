import { Module } from '@nestjs/common';
import { modelProviders } from './model.provider';

@Module({
  modules: [],
  components: [...modelProviders],
  exports: [...modelProviders],
})
export class ModelModule {}