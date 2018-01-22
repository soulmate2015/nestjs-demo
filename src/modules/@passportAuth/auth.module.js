import { Module } from '@nestjs/common';
import { PassportAuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy';

@Module({
  components: [PassportAuthService, JwtStrategy],
  exports: [PassportAuthService],
})
export class PassportAuthModule {}