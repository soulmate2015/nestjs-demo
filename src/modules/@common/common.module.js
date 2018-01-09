import { Module, Global } from '@nestjs/common';
import { CommonService } from './common.service';

@Global()
@Module({
  modules: [],
  components: [CommonService],
  exports: [CommonService]
})
export class CommonModule {}