import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Examen Web - Equipos y Jugadores')
    .setDescription('API para gestionar equipos de fútbol')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Se cargará en /api

  await app.listen(3000);
  console.log(`🚀 API corriendo en: http://localhost:3000`);
  console.log(`📝 Panel de control en: http://localhost:3000/api`);
}
bootstrap();