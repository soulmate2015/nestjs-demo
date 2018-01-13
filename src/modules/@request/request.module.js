import { Module } from '@nestjs/common';
import { requestProviders } from './request.provider';

@Module({
  modules: [],
  components: [...requestProviders],
  exports: [...requestProviders],
})
export class RequestModule {}