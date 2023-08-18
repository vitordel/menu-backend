import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos/user.dto';
import { User } from 'src/core/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findOneWithUserName(userName: string) {
    return await this.userRepository.findOne({ where: { email: userName } });
  }

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
    const { password, ...result } = user;
    return result;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async updateRefreshToken(email: string, refreshToken: string) {
    return await this.userRepository.update(email, { temptoken: refreshToken, last_login: new Date() });
  }
}