import { FindManyOptions, Not, Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CheckUsedEmail {

  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {
  }

  async exists(context: string, email: string, id: number = null): Promise<true | void> {
    const where: FindManyOptions = context !== 'update'
      ? { where: { email: email } }
      : { where: { id: Not(id), email: email } }

    const emailAlreadyUsed = await this.repository.exists(where);

    if (emailAlreadyUsed) {
      throw new BadRequestException('Email já está em uso.')
    }

    return true;
  }
}