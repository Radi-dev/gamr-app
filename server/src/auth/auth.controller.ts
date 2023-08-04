import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}

  @Get('login')
  login() {
    return 'a login';
  }
  @Post('login')
  signin() {
    return {
      aLoginPost: 'hhh',
      anotherOne: ['listNow', 'arrayNow', { objOhh: 'hehe' }],
      withAnother: 2333,
      yetAnother: { aIsFor: 'Apple' },
    };
  }
  @Post('signup')
  signup() {
    return 'a signup post';
  }
}
