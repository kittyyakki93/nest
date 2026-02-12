import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/module/auth/guard/local-auth.guard';
import type { AuthRequest } from 'src/type/auth.type';

@Controller('auth')
export class AuthController {

  // 로그인
  @Post("login")
  @UseGuards(LocalAuthGuard)
    // local.strategy -> guard -> validate -> return -> req.user
    // 이러한 사이클로 들어옴 social도 같은 사이클
  async login(@Req() req:AuthRequest) {
    console.log("controller", req.user)
  }









}
