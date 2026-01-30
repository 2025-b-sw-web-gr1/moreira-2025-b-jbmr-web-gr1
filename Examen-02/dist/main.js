"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Examen Web - Equipos y Jugadores')
        .setDescription('API para gestionar equipos de fútbol')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
    console.log(`🚀 API corriendo en: http://localhost:3000`);
    console.log(`📝 Panel de control en: http://localhost:3000/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map