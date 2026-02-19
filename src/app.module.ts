import { Module } from '@nestjs/common';
import { CoreModule } from './module/core/core.module';
import { MemberModule } from './module/member/member.module';
import { AuthModule } from './module/auth/auth.module';
import { JwtModule } from './module/jwt/jwt.module';
import { RedisModule } from './module/redis/redis.module';
import { JwtService } from './service/jwt/jwt.service';
import { RedisService } from './service/redis/redis.service';

@Module({
  imports: [
    CoreModule,
    MemberModule,
    AuthModule,
    JwtModule,
    RedisModule,
  ],
  controllers: [],
  providers: [JwtService, RedisService],
})
export class AppModule {}
