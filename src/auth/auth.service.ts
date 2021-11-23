import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService { 
    
    constructor(private usersService: UsersService,
        private jwtService: JwtService ){}
    //recup un user et vérifier son password
    async validateUser (username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if(user && user.password === password) {
            //on extrait l passwor 
            const { password, ...rest } = user;
           
            return rest;
        }
        return null;
    } 


    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
    
}
