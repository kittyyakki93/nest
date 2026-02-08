import { Injectable } from '@nestjs/common';
import { MemberRepository } from 'src/repository/member/member.repository';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly memberRepository: MemberRepository) { ; }
  
  // 비밀번호 해싱
  private readonly saltRounds = 10;

  //암호화
  async hashPassword(password: string) {
    return bcrypt.hash(password, this.saltRounds)
  }

  // 비밀번호 검사
  async comparePassword(password: string, hashedPassword: string):Promise<boolean> { 
    return bcrypt.compare(password, hashedPassword);
  }

}
