import { Injectable } from '@nestjs/common';
import { MemberRepository } from 'src/repository/member/member.repository';
import bcrypt from 'bcrypt';
import { JwtPayload } from 'src/type/auth.type';
import { TokenDTO } from 'src/domain/auth/dto/auth.dto';
import { JwtTokenService } from '../jwt/jwt.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly memberRepository: MemberRepository,
    private readonly jwtTokenService: JwtTokenService
  ) { ; }
  
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

  // 로그인
  async login(payload: JwtPayload): Promise<TokenDTO>{
    const accessToken = await this.jwtTokenService.generateAccessToken(payload);
    const refreshToken = await this.jwtTokenService.generateRefreshToken(payload);

    return {accessToken, refreshToken}
  }

  // 로그아웃 
}
