import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('reg')
  register(@Body() user: { username: string; password: string }) {
    return this.authService.register(user);
  }

  @Post('log')
  login(@Body() user: { username: string; password: string }) {
    return this.authService.login(user);
  }
}
