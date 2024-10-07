import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  envFilePath: '.env',
  isGlobal: true,
  nest: {
    port: parseInt(process.env.PORT) || 3000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: !!process.env.SWAGGER_ENABLED || true,
    title: process.env.SWAGGER_TITLE || 'Todo-List API',
    description: process.env.SWAGGER_DESCRIPTION || 'Todo-List API',
    version: process.env.SWAGGER_VERSION || '1.0',
    path: 'api',
  },
}));
