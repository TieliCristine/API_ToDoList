import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOptionsWhere, Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CheckUsedEmail } from "./use-cases/check-used-email.use-case";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private checkUsedEmail: CheckUsedEmail
  ) {
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    await this.checkUsedEmail.exists('create', createUserDto.email);
    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  findOneBy(option: FindOptionsWhere<User>): Promise<User> {
    return this.userRepository.findOneBy(option);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
