import { Body, Controller, Post, Req, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/core/dtos/user.dto";
import { UserService } from "src/services/user.service";
import { RefreshJwtGuard } from "./guards/refresh-jwt-auth.guard";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) { }

  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.body);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    return await this.authService.refreshToken(req.body);
  }
}