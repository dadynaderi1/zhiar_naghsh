import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from '../dtos/user/register.dto';
import { RegisterRequest } from '@zhiarnaghsh/shared';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      loginDto.username,
      loginDto.password
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterRequest) {
    // Map from shared RegisterRequest to internal RegisterDto if needed
    const internalDto: RegisterDto = {
      username: registerDto.username,
      email: registerDto.email,
      password: registerDto.password,
      firstName: registerDto.firstName || '', // Provide default empty string
      lastName: registerDto.lastName || '',   // Provide default empty string
      companyName: registerDto.companyName,
    };
    
    return this.authService.register(internalDto);
  }
}
