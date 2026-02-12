import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from 'src/service/auth/auth.service';
import { MemberModule } from '../member/member.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from 'src/controller/auth/auth.controller';

//순환 참조 해결
@Module({
  imports: [
    //한번만 처리해라 
    forwardRef(() => MemberModule),
    PassportModule.register({session:false})
  ],
  providers: [
    AuthService,
    LocalStrategy
  ],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule { ; }
