import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  async register(userDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const newUser = { ...userDto, password: hashedPassword };
    return this.userService.create(newUser);
  }

  async login(userDto: LoginUserDto) {
    const user = await this.userService.findOneWithLogin(userDto.login);

    if (!user || !(await bcrypt.compare(userDto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.verify(user);
  }

  async verify(user: User) {
    const payload = { username: user.login, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
