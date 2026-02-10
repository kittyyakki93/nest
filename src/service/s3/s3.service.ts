import { S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { MulterFile } from 'src/domain/member/dto/member.dto';

@Injectable()
export class S3Service {
  // 환경 변수
  private s3 = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  async uploadFile(file:MulterFile, folder:string) {
    
  }
}
