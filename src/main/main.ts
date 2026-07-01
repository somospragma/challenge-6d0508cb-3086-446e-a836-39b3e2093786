import { NestFactory } from '@nestjs/core';
import { TeamPPModule } from './teamPP.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database';

async function bootstrap() {
  const app = await NestFactory.create(TeamPPModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();