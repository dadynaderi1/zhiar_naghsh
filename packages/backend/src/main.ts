import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });
  
  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe());
  
  // Get port from config
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3002;
  
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
