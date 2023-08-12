import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}

  @Post('login')
  login() {
    return this.authservice.signin();
  }
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log('adswdl', dto);
    return this.authservice.signup(dto);
  }
}
