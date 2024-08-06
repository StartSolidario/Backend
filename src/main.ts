import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Start Solidario')
  .setDescription('Projeto Start Solidario')
  .setContact("Start Solidario","https://github.com/StartSolidario","start.solidario@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe()); // Habilitamos o validation globalmente

  app.enableCors(); // Habilitamos requisições de outras origens
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
