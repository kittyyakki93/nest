import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger 설정 추가
  setupSwagger(app);

  // CORS 허용
  app.enableCors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'PUT', 'POST', 'DELETE'],
    Credential: true,
  });

  await app.listen(process.env.PORT ?? 10000);
}
bootstrap();
