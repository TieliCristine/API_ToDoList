import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config";
import { configureSwagger } from "./config/swagger.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService).get('app');

  configureSwagger(app, config.swagger);
  if (config.cors.enabled){
    app.enableCors();
  }

  await app.listen(3000);
}
bootstrap();
