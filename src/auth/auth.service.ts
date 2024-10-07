import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../user/entities/user.entity";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {
  }

  async signIn(email: string, pass: string): Promise<{ user: Partial<User>, token: string }> {
    const user = await this.userService.findOneBy({ email: email, password: pass });
    console.log(user);
    if (!user) {
      throw new UnauthorizedException("Email or Password invalid");
    }

    const { password, ...jwtUser } = user;

    return {
      token: await this.jwtService.signAsync(jwtUser),
      user: jwtUser
    };
  }
}
