import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from 'src/service/auth/auth.service';
import { MemberModule } from '../member/member.module';

//순환 참조 해결
@Module({
  imports: [
    //한번만 처리해라 
    forwardRef(()=> MemberModule)
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
