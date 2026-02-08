import { Module } from '@nestjs/common';
import { CoreModule } from './module/core/core.module';
import { MemberModule } from './module/member/member.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [
    CoreModule,
    MemberModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
