import { Controller,Request, Get, Post, UseGuards } from '@nestjs/common';
//import { JwtService } from '@nestjs/jwt';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService }  from './auth/auth.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
                private authService: AuthService
      ) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('login')
   async login(@Request() req)  {
    return this.authService.login(req.user);
 // console.log(req.user);
 //return req.user;

  }


// GET /protectedGua
//@UseGuards(AuthenticatedGuard)
  @Get('protected')
  /*getHello(): string {
    return this.appService.getHello();
  }*/
  getHello(@Request() req): string {
    return req.user;
  }
 /* @Post('auth/login')
  async login(@Request() req) {
    console.log(req.user);
    return req.user;
  }*/
}
