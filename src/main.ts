import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  // app.setGlobalPrefix('v1');
  await app.listen(8070);
}
bootstrap();
