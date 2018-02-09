import { Module } from '@nestjs/common';
import { IoGateway } from './event.geteway';

@Module({
  modules: [],
  components: [IoGateway],
  exports: [],
})
export class EventModule {}