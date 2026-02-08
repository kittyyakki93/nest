import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthProvider } from '@prisma/client';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import {
  MemberRegisterDTO,
  MemberUpdateDTO,
} from 'src/domain/member/dto/member.dto';
import { MemberResponse } from 'src/domain/member/dto/member.response';
import { MemberService } from 'src/service/member/member.service';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @ApiOperation({ summary: '회원가입 서비스' })
  @Post('join')
  @HttpCode(201)
  async join(@Body() member: MemberRegisterDTO): Promise<ApiResponse> {
    // 컨트롤러에서 provider를 심는다.
    await this.memberService.join({
      ...member,
      memberProvider: AuthProvider.LOCAL,
    });
    // return값이 nest에서는 자동 응답(JSON)
    return new ApiResponse('회원가입이 완료되었습니다.');
  }

  // 회원 전체 목록 조회(원래 서비스X)
  @ApiOperation({ summary: '회원 전체 목록 조회' })
  @Get('')
  @HttpCode(200)
  async getMembers(): Promise<ApiResponse> {
    const members: MemberResponse[] = await this.memberService.getMembers();
    return new ApiResponse('회원 전체 조회 완료되었습니다.', members);
  }

  // 프로필사진 수정(AWS)

  // 회원정보 수정
  @Put(':id')
  async modify(
    @Param('id', ParseIntPipe) id: number,
    @Body() member: MemberUpdateDTO,
  ): Promise<ApiResponse> {
    const updatedMember = await this.memberService.modify(id, member);
    return new ApiResponse('회원 정보 수정 완료', updatedMember);
  }

  // 회원 탈퇴
  @ApiOperation({ summary: '회원 탈퇴' })
  @HttpCode(204)
  @Delete(':id')
  async withdraw(@Param('id', ParseIntPipe) id: number): Promise<ApiResponse> {
    await this.memberService.withdraw(id);
    return new ApiResponse('회원 탈퇴가 완료되었습니다.');
  }
}
