import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    private users: { username: string; password: string }[] = [];

    register(user: { username: string; password: string }) {
        this.users.push(user);
        return { message: 'Пользователь зарегистрирован', user };
  }

  login(user: { username: string; password: string }) {
    const foundUser = this.users.find(
      (u) => u.username === user.username && u.password === user.password,
    );
    if (foundUser) {
      return { message: 'Пользователь авторизирован', user: foundUser };
    } else {
      return { message: 'Ошибка авторизации' };
    }
  }
}
