import { Controller, Post, Body } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;

    // Mock authentication logic, replace with proper logic
    if (username === 'admin' && password === 'adminpass') {
      const payload = { username: 'admin', sub: 1, role: 'admin' };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else if (username === 'user' && password === 'userpass') {
      const payload = { username: 'user', sub: 2, role: 'user' };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}