import { Module } from '@nestjs/common';
import { enumProviders } from './enum.provider';

@Module({
  modules: [],
  components: [...enumProviders],
  exports: [...enumProviders],
})
export class EnumModule {}