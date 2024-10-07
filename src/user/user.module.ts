import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { CheckUsedEmail } from "./use-cases/check-used-email.use-case";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserService,
    CheckUsedEmail
  ],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
