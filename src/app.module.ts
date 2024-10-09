import { Module } from "@nestjs/common";
import APP_CONFIG from "./config/app.config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/entities/user.entity";
import { logger } from "./config/db-log.config";
import { AuthModule } from "./auth/auth.module";
import { TaskModule } from "./task/task.module";
import { Task } from "./task/entities/task.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [ APP_CONFIG ]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ ConfigModule ],
      inject: [ ConfigService ],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get<number>('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [ User, Task ],
        synchronize: true,
        logger: logger,
        autoLoadEntities: true
      })
    }),
    UserModule,
    AuthModule,
    TaskModule
  ],
  controllers: [ AppController ],
  providers: [ AppService ]
})
export class AppModule {
}
