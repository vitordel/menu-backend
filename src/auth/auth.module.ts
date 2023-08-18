import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/services/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import config from 'src/config/config';
import { LocalStrategy } from './strategies/local-strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/core/entities/user.entity';
import { JwtStrategy } from './strategies/jwt-strategy';
import { RefreshJwtStrategy } from './strategies/refreshToken.strategy';

@Module({

  imports: [
    JwtModule.register({
      secret: `${config().security.jwtSecret}`,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([User]),
  ],

  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy,
    RefreshJwtStrategy,
    UserService,
  ],

  controllers: [AuthController],
})
export class AuthModule { }