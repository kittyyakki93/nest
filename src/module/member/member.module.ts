import { forwardRef, Module } from '@nestjs/common';
import { MemberController } from 'src/controller/member/member.controller';
import { MemberRepository } from 'src/repository/member/member.repository';
import { MemberService } from 'src/service/member/member.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  //순환참조 MemberModule과 함께 추가
  imports: [
    forwardRef(()=> AuthModule)
  ],
  controllers: [MemberController],
  providers: [MemberRepository, MemberService],
  exports: [MemberRepository, MemberService],
  // ex post 관련 서비스에서 가져와서 써야하기때문에 export로 내보내주기.
})
export class MemberModule {}
