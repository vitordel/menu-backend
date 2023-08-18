import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/core/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private readonly userService: UserService, private jwtService: JwtService) { }

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOneWithUserName(username);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {

    const payload = {
      username: user.email,
      sub: {
        name: user.name,
      }
    };

    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });


    // await this.userService.updateRefreshToken(user.email, refreshToken);

    console.log('Logged in!');

    return {
      ...user,
      accessToken,
      refreshToken,
    };
  };

  async refreshToken(user: User) {
    const payload = {
      username: user.email,
      sub: {
        name: user.name,
      }
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  };
}
