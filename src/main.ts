import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './module/app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(8070);
}
bootstrap();
