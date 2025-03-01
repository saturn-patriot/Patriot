import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    const users = this.usersRepository.find();

    if ((await users).length < 0) {
      throw new NotFoundError("No users found");
    }

    return users;
  }

  async findOneWithLogin(login: string): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ login });
    
    return user;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOneByOrFail({ id });

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);

    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const result = await this.usersRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundError(`User ${id} not found`);
    }
  }
}
