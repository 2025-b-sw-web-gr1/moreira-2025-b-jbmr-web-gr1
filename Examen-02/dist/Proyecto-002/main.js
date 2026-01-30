"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../src/app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API de Equipos y Jugadores')
        .setDescription('Documentación completa de los endpoints del sistema')
        .setVersion('1.0')
        .addTag('teams')
        .addTag('players')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
    console.log('🚀 Documentación lista en: http://localhost:3000/api');
}
bootstrap();
//# sourceMappingURL=main.js.map