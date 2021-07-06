import { Logger, INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from './config';

export function setupSwagger(app: INestApplication): any {
    const logger: Logger = new Logger('Swagger');
    const swaggerEndpoint = config.get('intelligo.swagger.path');

    const options = new DocumentBuilder()
        .setTitle(config.get('intelligo.swagger.title'))
        .setDescription(config.get('intelligo.swagger.description'))
        .setVersion(config.get('intelligo.swagger.version'))
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(swaggerEndpoint, app, document);
    logger.log(`Added swagger on endpoint ${swaggerEndpoint}`);
}
